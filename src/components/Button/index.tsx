import { ButtonProps, Text, TouchableOpacity } from "react-native"
import { Colors } from "../../Style/Colors"
import { Icon } from "../../Style/Icon"
export const SButton = (props: ButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            backgroundColor: Colors.primary,
            width: "80%",
            paddingVertical: 16,
            paddingHorizontal: 8,
            borderRadius: 14
        }}>
            <Text style={{
                color: Colors.white,
                textAlign: "center",
                fontSize: 16,
                fontWeight: 500
            }}>{props.title}</Text>
        </TouchableOpacity>

    )
}

type IconButtonProps = {
    onPress: () => void,
    icon: String,
    color?: String,
    text?: String
}

export const IconButton = ({ onPress, icon, color, text }: IconButtonProps) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name={icon} size={30} color={color ?? Colors.primary} />
        </TouchableOpacity>
    )
}
