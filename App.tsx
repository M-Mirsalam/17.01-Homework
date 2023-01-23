import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios, { Axios } from 'axios'


const App = () => {

  const [name, setname] = useState<string>('');
  const [unitPrice, setprice] = useState<number>(0);
  const [unitsInstock, setStock] = useState<number>(0);

  let Send = () => {
    let newProduct: Product = {
      name: name,
      unitPrice: Number(unitPrice),
      unitsInstock: Number(unitsInstock)
    }
    axios.post('https://northwind.vercel.app/api/products', newProduct).then(res=>console.log(res.status));
  };

  return (
    <View>
      <View>
        <TextInput placeholder='Name' style={styles.input} onChangeText={setname} />
      </View>
      <View>
        <TextInput placeholder='UnitePrice' style={styles.input} onChangeText={(val) => setprice(Number(val))} />
      </View>
      <View>
        <TextInput placeholder='UnitInstock' style={styles.input} onChangeText={(val) => setStock(Number(val))} />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={Send}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

interface Product {
  name: string;
  unitPrice: number;
  unitsInstock: number
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 15,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10
  },

  button: {
    height: 25,
    width: 100,
    margin: 10,
    backgroundColor: '#DDDD',
    borderRadius: 5,
    alignItems: 'center'
  }
})