import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

export function Cadastro() {

    const navigation = useNavigation();

    return (

        <View style={styles.container} >

            <View style={styles.containerHeader}>
                <Text style={styles.title}>Bem-vindo ao TaskFlow Pro</Text>

                <Text style={styles.subTitle}>Com o ele agora você será capaz de otimizar muito melhor seus dias :D</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder='Nome Completo'
                maxLength={50}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
            />

            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder='Senha'
            />

            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder='Confirmar senha'
            />

            <TouchableOpacity
                style={styles.btnCadastro}
                onPress={() => navigation.navigate("Home")} >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            {/* <View style={styles.circle1} />
            <View style={styles.circle2} /> */}

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 40,
        backgroundColor: "#D9D9D9",
        borderRadius: 50,
        width: 310,
        height: 50,
        marginVertical: 10,
        paddingLeft: 20
    },
    btnCadastro: {
        backgroundColor: "#008B8B",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 30,
        justifyContent: 'center',
        alignItens: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
    // circle1: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 100,
    //     top: 0,
    //     left: 155,
    //     backgroundColor: "#00FFFF33"
    // },
    // circle2: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 100,
    //     // top: 0,
    //     left: 110,
    //     backgroundColor: "#00FFFF33"
    // }

})