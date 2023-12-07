import React, {useState} from 'react'
import {StyleSheet, TextInput, Text, Pressable, View} from "react-native";

export function Form({ addHandler }) {

    const [ text, setText ] = useState("")

    const onChange = (text) => {
        setText(text)
    }

    return (
        <View
            style={styles.view}
        >
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder={"Введите задачу"}/>
            <Pressable
                style={styles.button}
                color={"#2BE080"}
                onPress={() => addHandler(text)}
            >
                <Text style={styles.text}>
                    Добавить задачу
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        alignItems: "center"
    },
    input: {
        padding: 0,
        marginTop: 40,
        width: "100%",
        height: 40,
        borderBottomColor: "#2BE080",
        borderBottomWidth: 1
    },
    button: {
        marginTop: 20,
        backgroundColor: "#2BE080",
        height: 40,
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    text: {
        color: "white"
    }
})