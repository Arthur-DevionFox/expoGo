import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Header} from "./components/Header";
import React, {useState} from "react";
import {casesList} from "./utils/casesList";
import {List} from "./components/List";
import {Form} from "./components/Form";

export default function App() {

  const [ listOfItems, setListOfItems ] = useState(casesList)

  const addHandler = (text) => {
      setListOfItems((list) => {
          return [
              { text: text, key: Math.random().toString(36).substring(7) },
              ...list
          ]
      })
  }

  const deleteHandler = (key) => {
      setListOfItems((list) => {
          return list.filter((listOfItems) => listOfItems.key !== key)
      })
  }

  return (
    <View style={styles.header}>
      <Header/>
      <Form
        addHandler={addHandler}
      />
      <View style={styles.view}>
        <FlatList
            style={styles.list}
            data={listOfItems}
            renderItem={
              ({ item }) => <List element={item} deleteHandler={deleteHandler}/>
            }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        marginTop: 120,
    },
    list: {
        marginTop: 20,
        display: "flex",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        padding: 5,
    },
    view: {
        margin: "auto",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    }
});
