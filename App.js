import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Header, Icon, Input, ListItem } from 'react-native-elements';

export default function App() {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [item, setItem] = useState({product: '', amount: ''});
  const [items, setItems] = useState([]);
  
  const saveList = () => {
    setItem({product: product, amount: amount})
    //console.log(item)
    items.push(item)
    //setItems([...items, {item}])
    console.log(items)
    setProduct('');
    setAmount('');
  }
  
  const renderItem = ({ items }) => (
    <ListItem bottomDivider >
      <ListItem.Content>
        <ListItem.Title>{item.product}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
  return (
    <View style={styles.container}>
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'SHOPPING LIST', color: '#fff' }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Input placeholder='Product' label='PRODUCT' onChangeText={product => setProduct(product)}
      value={product}/>
      <Input placeholder='Amount' label='AMOUNT' onChangeText={amount => setAmount(amount)}
      value={amount}/>
      <Button raised icon={{name: 'save'}} onPress={saveList} title="SAVE" />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


