import { DefaultTheme } from "@react-navigation/native"
import { StyleProp, Text, View, ViewStyle } from "react-native"
import { Colors } from "../../../Style/Colors"

type DebitCardProps = {
    title: string,
    totalCost: Number
    style: StyleProp<ViewStyle>
}

export const DebitCard = ({ style, title, totalCost }: DebitCardProps) => {

    return (
        <View style={[style]}>
            <View style={[{
                borderWidth: 1,
                borderColor: Colors.gray,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                paddingHorizontal: 24,
                paddingBottom: 48,
                paddingTop: 32,
            }]}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: 300, fontSize: 14 }}>Local: </Text>
                    <Text style={{ fontWeight: 700, fontSize: 14 }}>Shopping Manauara</Text>
                </View>
                <Text style={{ fontWeight: 400, fontSize: 14, marginTop: 4 }}>{title}</Text>

            </View>
            <View style={[{
                borderWidth: 1,
                borderColor: Colors.gray,
                borderRadius: 16,
                paddingHorizontal: 24,
                paddingVertical: 32,
                marginTop: -20,
                backgroundColor: DefaultTheme.colors.background

            }]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 300, fontSize: 12 }}>Custo:</Text>
                    <Text style={{ fontWeight: 700, fontSize: 16 }}>{`R$ ${totalCost.toFixed(2)}`}</Text>
                </View>
            </View>
        </View>
    )
}