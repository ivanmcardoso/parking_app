import React from "react";
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "../../Style/Colors";

type SInputProps = TextInputProps & { endIcon?: String, iconColor?: string, onClickIcon?: () => void }

export const SInput = (props: SInputProps) => {
    return (
        <View style={[styles.container, props.style]}>
            <TextInput
                {...props}
                style={styles.input}

            />
            {props.endIcon != null ? <TouchableOpacity onPress={props.onClickIcon}><Icon name={props.endIcon} size={30} color={props.iconColor ?? "gray"} /></TouchableOpacity> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        width: "80%",
        paddingHorizontal: 16,
        paddingVertical: 16,
        margin: 12,
        backgroundColor: Colors.gray,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        marginEnd: 8,
    }

});