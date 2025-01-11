import { View } from "react-native";
import { IconButton, SButton } from "../../components/Button";
import { Colors } from "../../Style/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { DebitCard } from "./DebitCard";

export function DebitsScreen({ navigation }) {

    const date = new Date()
    let time = `${date.getHours()}:${date.getMinutes()}`

    return (
        <SafeAreaView>
            <View style={{ margin: 24 }}>
                <IconButton onPress={() => navigation.goBack()} icon={"arrow-left"} />
            </View>

            <View style={{ alignItems: "center" }}>
                <DebitCard style={{ marginHorizontal: 24, marginVertical: 32, width: "80%" }} title={`tikect gerado às ${time}`} totalCost={23.20} />
                <SButton title="Pagar" onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView>
    )


}
