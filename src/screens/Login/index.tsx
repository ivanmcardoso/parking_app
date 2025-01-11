import { useState } from "react";
import { View, Text } from "react-native";
import { SInput, SButton } from "../../components";
import { Routes } from "../../routes";

export function LoginScreen({ navigation }) {
    const [hidePass, setHidePass] = useState(true);
    const [icon, setIcon] = useState("visibility");

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 500, marginTop: 64 }}>Seja Bem Vindo</Text>
            <Text style={{ fontSize: 14, fontWeight: 300, marginTop: 12 }}>Faça login para continuar</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -100 }}>
                <SInput
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <SInput
                    placeholder="Senha"
                    endIcon={icon}
                    style={{ marginBottom: 36 }}
                    multiline={false}
                    secureTextEntry={hidePass}
                    onClickIcon={() => {
                        setHidePass(!hidePass)
                        setIcon(hidePass ? "visibility-off" : "visibility")
                    }}
                />
                <SButton
                    title="Entrar"
                    onPress={() => navigation.navigate(Routes.Home)}
                />
            </View>
        </View>

    );
}