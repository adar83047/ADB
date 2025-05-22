import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const images = [
  require('../../assets/images/burger.png'),
  require('../../assets/images/chicken.png'),
  require('../../assets/images/pizza.png'),
  require('../../assets/images/soup.png'),
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>Dawat Dost!!!</Text>
        <Image source={require('../../assets/images/logo.jpg')} style={styles.image} />
      </View>
      <View style={styles.BannerContainer}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{ width: 200, height: 120, borderRadius: 20, margin: 10 }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.dot}>
        <Text style={styles.Text2}> Food Categories </Text>
        <TouchableOpacity>
          <Text style={styles.viewall}> View All </Text>
        </TouchableOpacity>
      </View>
      {['Soups', 'Burgers', 'Chicken', 'Pizzas'].map((category, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.category}>
            <Image source={images[index]} style={styles.cateImg} />
            <Text style={styles.cateText}>{category}</Text>
            <Image source={require('../../assets/images/arrow.png')} style={styles.cateImgV} />
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.empty}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    top: 40,
    height: 100,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
    margin: 10,
  },
  dot: {
    top: 30,
    height: 27,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 75,
    height: 75,
  },
  cateImg: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    borderRadius: 20,
  },
  cateImgV: {
    width: 20,
    height: 50,
    alignSelf: 'center',
  },
  cateText: {
    fontSize: 25,
    alignSelf: 'center',
    left: -20,
    fontFamily: 'Arial',
  },
  BannerContainer: {
    top: 20,
    height: 150,
    width: '80%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#21150d',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text2: {
    fontSize: 20,
    color: '#c67f4f',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  viewall: {
    fontSize: 20,
    color: '#FF810D',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  container: {
    flex: 1,
    backgroundColor: '#3b2617',
  },
  empty: {
    height: 100,
  },
});