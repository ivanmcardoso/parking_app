import { StyleProp, Text, View, ViewStyle } from "react-native"
import { Colors } from "../../../../Style/Colors"


type HomeEmptyCardProps = {
    style: StyleProp<ViewStyle>
}

export const HomeEmptyCard = ({ style }: HomeEmptyCardProps) => {
    return (<View style={[{
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 48,
    }, style]}>
        <Text style={{ fontWeight: 700, fontSize: 14 }}>Não há tickets pendentes</Text>
    </View>)
}