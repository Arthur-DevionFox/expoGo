import {StyleSheet, Text, View} from "react-native";

export function Header() {
    return (
        <>
            <View style={styles.main}>
                <Text style={styles.text}>Список дел</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
    },
    text: {

    }
})