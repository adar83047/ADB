import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../context/CartContext';

const width = 150;

export default function Viewall() {

  const [items, setItems] = useState([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/api/pizzas').then(res => res.json()).catch(() => [
        { id: 1, name: 'Margherita Pizza', image: require('../../../assets/images/pizza.png'), price: 500 }
      ]),
      fetch('http://localhost:3000/api/burgers').then(res => res.json()).catch(() => [
        { id: 2, name: 'Beef Burger', image: require('../../../assets/images/burger.png'), price: 300 }
      ]),
      fetch('http://localhost:3000/api/chikens').then(res => res.json()).catch(() => [
        { id: 3, name: 'Fried Chicken', image: require('../../../assets/images/chicken.png'), price: 350 }
      ]),
      fetch('http://localhost:3000/api/soups').then(res => res.json()).catch(() => [
        { id: 4, name: 'Chicken Soup', image: require('../../../assets/images/soup.png'), price: 200 }
      ]),
    ]).then(([pizzas, burgers, chikens, soups]) => {
      setItems([...pizzas, ...burgers, ...chikens, ...soups]);
    });
  }, []);
  
    useEffect(() => {
      fetch('http://localhost:3000/api/chikens')
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(() => {
          setItems([
          { id: 1, name: 'Margherita Pizza', image: require('../../../assets/images/pizza.png'), price: 500 },
          { id: 2, name: 'Beef Burger', image: require('../../../assets/images/burger.png'), price: 300 },
          { id: 3, name: 'Fried Chicken', image: require('../../../assets/images/chicken.png'), price: 350 },
          { id: 4, name: 'Chicken Soup', image: require('../../../assets/images/soup.png'), price: 200 },
      ]);
        });
    }, []);

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#21150d" />
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style = {styles.Text}>Dawat Dost!!!</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/screens/HomeScreen')}>
            <Image source={require('../../../assets/images/logo.jpg')} style={styles.image} />
          </TouchableOpacity>
      </View>
              <ScrollView contentContainerStyle={{ padding: 16 }}>
                {items.map((chiken) => (
                  <View key={chiken.id} style={styles.card}>
                    <Image source={chiken.image} style={styles.pizzaImg} />
                    <Text style={styles.pizzaName}>{chiken.name}</Text>
                    <Text style={styles.pizzaPrice}>$ {chiken.price}</Text>
                    <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(chiken)}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>

        </SafeAreaView> 
    </>)}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  pizzaImg: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginBottom: 8,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  pizzaPrice: {
    fontSize: 16,
    color: '#CA7842',
    marginBottom: 8,
  },
  addBtn: {
    backgroundColor: '#CA7842',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  image:{
    width: 75,
    height: 75,
  },
  header:{
    backgroundColor: '#21150d',
    height: 80,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor:'#bf6c28',
  },

});
