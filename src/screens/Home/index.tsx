import { View, Text, Alert, Modal, Pressable, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { SButton, SInput } from "../../components";
import { IconButton } from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../Style/Colors";
import { HomeCard } from "./Components/HomeCard";
import { Routes } from "../../routes";
import { HomeEmptyCard } from "./Components/HomeEmptyCard";
import { useEffect, useState } from "react";
import React from "react";
import { Icon } from "../../Style/Icon";

export function HomeScreen({ navigation }) {

    const [hasTicket, setHasTicket] = useState(false)
    const [ticketFlag, setTicketFlag] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [plate, setPlate] = useState("");
    const [plateInput, setPlateInput] = useState("");
    const [plateList, setPlateList] = useState<string[]>([]);

    // atualiza ticket
    useEffect(() => {
        if (plate != "" && !ticketFlag) {
            setTimeout(() => {
                setHasTicket(s => !s)
            }, 2500)
        }
    }, [plate])


    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={{
                width: "100%",
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column',
                paddingHorizontal: 24,
                paddingTop: 24,
                paddingBottom: 24,
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                backgroundColor: Colors.primary
            }}>
                <View style={{
                    flexDirection: 'row-reverse',
                    width: "100%",
                }}>
                    <IconButton onPress={() => navigation.goBack()} icon={"close"} color={Colors.white} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: "100%",
                    marginVertical: 24
                }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}>
                            <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.white }}>Placa do carro: </Text>
                            <Text style={{ fontSize: plate == "" ? 14 : 24, fontWeight: 500, color: Colors.white }}>{plate == "" ? "Não há veiculo \ncadastrado" : plate}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.white }}>Saldo: </Text>
                        <Text style={{ fontSize: 24, fontWeight: 500, color: Colors.white }}>R$ {ticketFlag ? "00,00" : " 23,20"}</Text>
                    </View>
                </View>
            </View>
            <View>
                {hasTicket ? <>
                    <HomeCard style={{ marginTop: 108, marginBottom: 32 }} debits={1} totalCost={23.2} />
                    <SButton title="Pagar" onPress={() => {
                        setTicketFlag(true)
                        setHasTicket(false)
                        navigation.navigate(Routes.Debits)
                    }} />
                </> :
                    <HomeEmptyCard style={{ marginTop: 108, marginBottom: 32 }} />}

            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Selecione o veiculo</Text>
                        <FlatList data={plateList}
                            renderItem={({ item }) => <TouchableOpacity
                                style={{ paddingVertical: 8, marginHorizontal: 32, flex: 1, borderWidth: 1, borderColor: "white", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                                onPress={() => {
                                    setPlate(item)
                                    setModalVisible(!modalVisible)
                                }}>
                                <Text >{item}</Text>
                                <Icon size={25} color={Colors.primary} name="chevron-right" />
                            </TouchableOpacity>}
                            keyExtractor={item => item}
                            removeClippedSubviews={false}
                            keyboardShouldPersistTaps={true}
                            ListFooterComponent={<SInput
                                placeholder="Placa do carro"
                                endIcon={"add"}
                                style={{ width: 300 }}
                                value={plateInput}
                                maxLength={7}
                                onChangeText={setPlateInput}
                                onClickIcon={() => {
                                    if (plateInput != "") {
                                        setPlateList(s => s.concat(plateInput.toLocaleUpperCase()))
                                    }
                                    setPlateInput("")
                                }}
                                iconColor={Colors.primary}
                            />}
                        />


                        <SButton onPress={() => setModalVisible(!modalVisible)} title="Fechar" />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        height: 500,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});