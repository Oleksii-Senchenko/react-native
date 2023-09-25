import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native"; // Добавлен импорт компонента Text
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listofItems, setListofItems] = useState([
    { text: "Купить ноут", index: 1 },
    { text: "Сходить в магаз", index: 2 },
    { text: "Купить машину", index: 3 },
    { text: "Порезать ножницы", index: 4 },
  ]);
  return (
    <View style={styles.container}>
      <Header />

<Form/>

      <View>
        <FlatList
          data={listofItems}
          renderItem={({ item }) => (<ListItem item={item}/>)} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
