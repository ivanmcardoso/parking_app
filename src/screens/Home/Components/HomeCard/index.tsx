import { DefaultTheme } from "@react-navigation/native"
import { Colors } from "../../../../Style/Colors"
import { StyleProp, Text, View, ViewStyle } from "react-native"

type HomeCardProps = {
    debits: Number,
    totalCost: Number
    style: StyleProp<ViewStyle>
}

export const HomeCard = ({ style, debits, totalCost }: HomeCardProps) => {
    let titleSuffix = debits == 1 ? "ticket pendente" : "tickets pendentes"
    let title = `${debits} ` + titleSuffix
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
                <Text style={{ fontWeight: 700, fontSize: 14 }}>{title}</Text>
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
                    <Text style={{ fontWeight: 300, fontSize: 12 }}>Custo Total:</Text>
                    <Text style={{ fontWeight: 700, fontSize: 16 }}>{`R$ ${totalCost.toFixed(2)}`}</Text>
                </View>
            </View>
        </View>
    )
}