import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Header, Icon, Input, ListItem } from 'react-native-elements';

export default function App() {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);
  
  const saveList = () => {
    items.push({product: product, amount: amount})
    //setItems([...items, {item}])
    console.log(items)
    setProduct('');
    setAmount('');
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider >
      <ListItem.Content>
        <ListItem.Title>{item.product}</ListItem.Title>
        <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
        <Text><Icon name='delete' color='#FF0000' onPress={() => remove(item.id)}/></Text>
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
      keyExtractor={keyExtractor = (item, index) => index.toString()}
      data={items}
      renderItem={renderItem}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});


