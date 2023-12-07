import React from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";

export function List( {element, deleteHandler} ) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(element.key)}>
            <Text style={styles.text}>{element.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        borderColor: "#2BE080",
        borderWidth: 2,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
        display: "flex",
        alignItems: "center",
        color: "#2BE080"
    }
})