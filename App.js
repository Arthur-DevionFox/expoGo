import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Header} from "./components/Header";
import React, {useState} from "react";

export default function App() {

  const [ listOfItems, setListOfItems ] = useState([
    {
      text: "Купить...", key: "1"
    },
    {
      text: "Помыть...", key: "2"
    },
    {
      text: "Сделать...", key: "3"
    }
  ])

  return (
    <View style={styles.header}>
      <Header></Header>
      <View>
        <FlatList
            data={listOfItems}
            renderItem={
              ({ item }) => <Text>{item.text}</Text>
            }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});
