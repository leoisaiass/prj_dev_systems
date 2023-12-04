import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export function Home() {

    const navigation = useNavigation();

    return (
        <Animatable.View animation="fadeInUp" delay={500} style={styles.container}>

            <View style={styles.containerHeader}>
                <Image
                    source={require("../../assets/userFace.png")}
                    style={styles.userFace}
                />

                <Text style={styles.userName}>Olivia Orléans de Bragança</Text>
            </View>

            <View style={styles.containerBody}>
            </View>

            <View style={styles.containerFooter}>
                <TouchableOpacity style={styles.btnCalendario}>
                    <Text style={styles.btnTxt}>Calendário</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnLocalizacao}>
                    <Text style={styles.btnTxt}>Localização</Text>
                </TouchableOpacity>
            </View>

        </Animatable.View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    containerHeader: {
        width: 330,
        height: 110,
        borderRadius: 40,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        padding: 10,
        flexDirection: "row"
    },
    userFace: {
        width: 90,
        height: 95,
    },
    userName: {
        color: "black",
        paddingLeft: 25,
        fontWeight: "bold",
    },
    containerBody: {
        backgroundColor: "#D9D9D9",
        width: 330,
        height: 420,
        marginTop: 30,
        borderRadius: 40,
        marginBottom: 15,
    },
    containerFooter: {
        flexDirection: "row",
    },
    btnCalendario: {
        width: 150,
        height: 40,
        borderRadius: 40,
        backgroundColor: "#D9D9D9",
        marginRight: 30,
        padding: 10,
    },
    btnLocalizacao: {
        width: 150,
        height: 40,
        borderRadius: 40,
        backgroundColor: "#D9D9D9",
        padding: 10,
    },
    btnTxt: {
        color: "black",
    }
})