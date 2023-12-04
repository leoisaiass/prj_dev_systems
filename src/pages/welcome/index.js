import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Animatable.Image
                animation="flipInY"
                source={require("../../assets/logo1.png")}
                style={styles.logo1}
            />

            <Animatable.Image
                animation="flipInY"
                source={require("../../assets/logo2.png")}
                style={styles.logo2}
            />

            <Text style={styles.title}>Seja organizado com o TaskFlow Pro</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Vamos começar!</Text>
            </TouchableOpacity>
        </View>
    )
}

// View - é um espaço na tela, uma caixinha que pode receber coisas
// Text - é para conseguir inserir textos
// StyleSheet - estilização


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    logo1: {
        width: 355,
        height: 214,
        borderRadius: 34,
        marginLeft: 40
    },
    logo2: {
        width: 236,
        height: 207
    },
    title: {
        fontSize: 18,
        margin: 30,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#008B8B",
        width: "60%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginBottom: 18,
        paddingBottom: 4
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})