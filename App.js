import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Header, Icon, Input, ListItem } from 'react-native-elements';

export default function App() {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);
  const [length, setLength] = useState(0);

  const saveList = () => {
    items.push({id: length, product: product, amount: amount})
    //setItems([...items, {item}])
    //console.log(items)
    setProduct('');
    setAmount('');
    setLength(length+1);
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
    setLength(length+1); //to avoid making the same id twice
  };

  const renderItem = ({ item }) => (
    <View>
    <ListItem bottomDivider >
      <ListItem.Content>
        <ListItem.Title style={{fontSize: 18}}>{item.product}</ListItem.Title>
        <ListItem.Subtitle style={{fontSize: 16}}>{item.amount}</ListItem.Subtitle>
        <Text style={{marginLeft: 320, marginTop: -40}} onPress={() => remove(item.id)}>
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
      </ListItem.Content>
    </ListItem>
    </View>
    
  )
    
  return (
    <View style={styles.container}>
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={<Text style={{color: '#fff'}}>SHOPPING LIST</Text>} //used <Text> instead of {text} to get the white color
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Input placeholder='Product' label='PRODUCT' onChangeText={product => setProduct(product)}
      value={product}/>
      <Input placeholder='Amount' label='AMOUNT' onChangeText={amount => setAmount(amount)}
      value={amount}/>
      <View style={styles.button}>
      <Button raised icon={{name: 'save', color: '#fff'}} onPress={saveList} title="SAVE" />
      </View>
      <Text style={styles.note}>Double click the bin to remove the item</Text>
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
  button: {
    height: 100, 
    width: 150,
    marginLeft: 110,
    marginRight: 110
  },
  note:{
    color: 'grey',
    marginTop: -50,
    marginLeft: 10
  }
});


