import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a) de volta ao TaskFlow Pro</Text>
            </Animatable.View>

            <Animatable.Image
                animation="fadeInLeft" delay={500}
                source={require("../../assets/logoLogin.png")}
                style={styles.logoLogin}
            />

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite seu e-mail'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
    },
    logoLogin: {
        width: 350,
        height: 170,
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title: {
        fontSize: 18,
        marginTop: 25,
        paddingLeft: 20,
        marginBottom: 5
    },
    input: {
        height: 50,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#D9D9D9",
        borderRadius: 50,
        paddingLeft: 20,
    },
    button: {
        backgroundColor: "#008B8B",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 50,
        justifyContent: 'center',
        alignItens: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: "#008B8B",
        fontWeight: 'bold',
    }
})
