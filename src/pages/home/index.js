import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, TextInput, Keyboard, Alert } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

export function Home() {

    const navigation = useNavigation();
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');


    async function addTask() {
        if (newTask == "") {
            Alert.alert("Atenção!", "Nome da tarefa não pode ser vazio.")
            return;
        }

        const search = task.filter(task => task == newTask);

        if (search.length != 0) {
            Alert.alert("Atenção!", "Nome da tarefa já foi utilizado.");
            return;
        }

        setTask([...task, newTask]);
        setNewTask('');

        Keyboard.dismiss();
    }


    async function removeTask(item) {
        Alert.alert("Deletar tarefa!", "Tem certeza de que deseja remover esta anotação?",
            [
                {
                    text: "Cancelar",
                    onPress: () => {
                        return;
                    },
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => setTask(task.filter(tasks => tasks != item))
                }
            ],
            { cancelable: false }
        );
    }

    // Leonardo Costa -- Comentando esta linha, pois precisa aparentemente não se utiliza mais o "getItem"
    // useEffect(() => {
    //     console.log(newTask);
    // }, [newTask])

    // useEffect(() => {
    //     async function carregaDados() {
    //         const task = await AsyncStorage.getItem("task");

    //         if (task) {
    //             setTask(JSON.parse(task));
    //         }
    //     }
    //     carregaDados();
    // })

    // useEffect(() => {
    //     async function salvaDados() {
    //         AsyncStorage.setItem("item", JSON.stringify(task));
    //     }
    //     salvaDados();
    // }, [task])


    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={0}
            behavior='padding'
            style={{ flex: 1 }}
        >

            <Animatable.View animation="fadeInUp" delay={500} style={styles.container}>

                <View style={styles.containerHeader}>
                    <Image
                        source={require("../../assets/userFace.png")}
                        style={styles.userFace}
                    />

                    <Text style={styles.userName}>Olivia Orléans de Bragança</Text>
                </View>

                <View style={styles.containerBody}>
                    <FlatList
                        style={styles.list}
                        data={task}
                        keyExtractor={item => item.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.containerViewList}>
                                <Text style={styles.containerTextList}>{item}</Text>

                                <TouchableOpacity onPress={() => removeTask(item)}>
                                    <MaterialIcons name="delete-forever" size={20} color="red" />
                                </TouchableOpacity>
                            </View>

                        )}
                    />

                    <View style={styles.viewAddTask}>
                        <TextInput
                            style={styles.txtAddTask}
                            placeholder='Adicione uma tarefa'
                            autoCorrect={true}
                            maxLength={25}
                            onChangeText={text => setNewTask(text)}
                            value={newTask}
                        />

                        <TouchableOpacity style={styles.btnAddTask} onPress={() => addTask()}>
                            <Feather name="plus-circle" size={20} color="green" />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.containerFooter}>
                    <TouchableOpacity style={styles.btnCalendario}>
                        <Feather name="calendar" size={20} color="black" />
                        <Text style={styles.btnTxt}>Calendário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLocalizacao}>
                        <Ionicons name="location-outline" size={20} color="black" />
                        <Text style={styles.btnTxt}>Localização</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </KeyboardAvoidingView>
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
    viewAddTask: {
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "white",
        // borderWidth: 3,
        borderRadius: 50,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "75%",
        justifyContent: "space-between",
        alignItems: "center",
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
        flexDirection: "row"
    },
    btnLocalizacao: {
        width: 150,
        height: 40,
        borderRadius: 40,
        backgroundColor: "#D9D9D9",
        padding: 10,
        flexDirection: "row"
    },
    btnTxt: {
        color: "black",
        paddingLeft: 20,
    },
    // list: {
    //     // backgroundColor: "red"
    //     paddingTop: 10,
    //     paddingLeft: 30
    // },
    containerViewList: {
        marginTop: 15,
        marginHorizontal: 10,
        padding: 15,
        height: 55,
        borderRadius: 40,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "gray",
        alignItems: "center"
    },
    containerTextList: {
        fontSize: 14,
    }
})