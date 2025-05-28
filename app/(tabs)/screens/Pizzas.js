import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../context/CartContext';

const width = 150;
export default function PizzasScreen() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:3000/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(() => {
        setPizzas([
          { id: 1, name: 'Margharita Pizza', image: require('../../../assets/images/Margharita Pizza.jpg'), price: 500 },
          { id: 2, name: 'Pepperoni', image: require('../../../assets/images/Pepperoni Pizza.jpg'), price: 600 },
        ]);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#21150d" />
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.Text}>Dawat Dost!!!</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/screens/HomeScreen')}>
          <Image source={require('../../../assets/images/logo.jpg')} style={styles.image} />
        </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {pizzas.map((pizza) => (
            <View key={pizza.id} style={styles.card}>
              <Image source={pizza.image} style={styles.pizzaImg} />
              <Text style={styles.pizzaName}>{pizza.name}</Text>
              <Text style={styles.pizzaPrice}>$ {pizza.price}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={() => { addToCart(pizza); Alert.alert('Added to Cart', `${pizza.name} has been added to your cart.`); }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

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
    backgroundColor:'#3b2617',
  },
});
