import Slider from "@react-native-community/slider";
import React, { useRef, useState } from "react"
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native"
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';


export function CameraScreen({ navigation }) {
    const camera = useRef<Camera>(null)

    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()

    if (device == null) return <SafeAreaView><Text>Não foi possivel localizar a camera</Text></SafeAreaView>
    if (!hasPermission) {
        requestPermission()
    }
    const [zoom, setZoom] = useState(device.neutralZoom)
    const [torchLevel, setTorchLevel] = useState(1.0)
    const [flash, setFlash] = useState(false)

    return (
        <SafeAreaView>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                enableZoomGesture={true}
                ref={camera}
                photo={true}
                zoom={zoom}
                torchLevel={torchLevel}
                torch={flash ? 'on' : 'off'}
            />
            <View style={{
                width: '100%', height: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 32
            }}>
                <Button title='Flash' onPress={async () => {
                    setFlash(!flash)
                }} />
                <View style={{
                    flexDirection: 'column',
                }}>
                    <Text>Zoom</Text>
                    <Slider
                        style={{ width: '100%', height: 40, marginVertical: 12 }}
                        minimumValue={device.minZoom}
                        maximumValue={device.maxZoom}
                        value={zoom}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={v => setZoom(v)}
                    />
                    <Text>Flash</Text>
                    <Slider
                        style={{ width: '100%', height: 40, marginVertical: 12 }}
                        minimumValue={0.1}
                        maximumValue={1.0}
                        value={torchLevel}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={v => setTorchLevel(v)}
                    />
                    <Button title='tirar foto' onPress={async () => {
                        const photo = await camera.current?.takePhoto()
                        console.log(photo?.path)
                    }} />
                </View>

            </View>
        </SafeAreaView>
    );
}

