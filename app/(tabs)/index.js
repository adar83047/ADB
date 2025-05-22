import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const images = [
  require('../../assets/images/burger.png'),
  require('../../assets/images/chicken.png'),
  require('../../assets/images/pizza.png'),
  require('../../assets/images/soup.png'),
];
const width = 250;
export default function HomeScreen() {
  const router = useRouter();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: width * nextIndex, animated: true });
        }
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return (

    <>
    <StatusBar barStyle="light-content" backgroundColor="#21150d" />

    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style = {styles.Text}>Dawat Dost!!!</Text>
        <Image source={require('../../assets/images/logo.jpg')} style={styles.image} />
      </View>
              <View style={[styles.BannerContainer, { width,height:200, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }]}> 
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled
            snapToInterval={width}
            decelerationRate="fast"
            style={{ width}}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            onMomentumScrollEnd={e => {
              const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
              setCurrentIndex(newIndex);
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={{ width: width, height: 150, borderRadius: 20, margin: 0 }}
                resizeMode="cover"
              />
            ))}
          </ScrollView>
              </View>
              <View style={styles.dot}>
              <Text style={styles.Text2}> Food Categories </Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/screens/Viewall')}>
              <Text style={styles.viewall}> View All </Text>
              </TouchableOpacity>
              </View>


          <TouchableOpacity style={styles.category} onPress={() => router.push('/(tabs)/screens/Soups')}>
              <Image source={require('../../assets/images/soup.png')} style={styles.cateImg}/>
              <Text style={styles.cateText}>Soups</Text>
              <Image source={require('../../assets/images/arrow.png')} style={styles.cateImgV}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} onPress={() => router.push('/(tabs)/screens/Burgers')}>
              <Image source={require('../../assets/images/burger.png')} style={styles.cateImg}/>
              <Text style={styles.cateText}>Burgers</Text>
              <Image source={require('../../assets/images/arrow.png')} style={styles.cateImgV}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} onPress={() => router.push('/(tabs)/screens/Chikens')}>
              <Image source={require('../../assets/images/chicken.png')} style={styles.cateImg}/>
              <Text style={styles.cateText}>Chicken</Text>
              <Image source={require('../../assets/images/arrow.png')} style={styles.cateImgV}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category} onPress={() => router.push('/(tabs)/screens/Pizzas')}>
              <Image source={require('../../assets/images/pizza.png')} style={styles.cateImg}/>
              <Text style={styles.cateText}>Pizzas</Text>
              <Image source={require('../../assets/images/arrow.png')} style={styles.cateImgV}/>
          </TouchableOpacity>
            <View style={styles.empty}></View>

    </SafeAreaView>
  </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  category: {
    top: 40,
    height: 100,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#CA7842',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
    margin: 20,

    shadowColor: '#FF810D',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  dot:{
    top: 30,
    height:27,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image:{
    width: 75,
    height: 75,
  },
  cateImg:{
    width: 75,
    height: 75,
    alignSelf:'center',
    borderRadius:20
  },
  cateImgV:{
    width: 50,
    height: 50,
    alignSelf:'center'
  },
  cateText:{
    fontSize:25,
    alignSelf:'center',
    left:-20,
    fontFamily:'Arial'
  },
   BannerContainer: {
    top: 20,
    height: 150,
    alignSelf: 'center',
    overflow: 'hidden',
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
  Text2:{
    fontSize: 20,
    color: '#c67f4f',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  viewall:{
    fontSize: 20,
    color: '#FF810D',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  container: {
    flex: 1,
    backgroundColor:'#3b2617',
  },
  container2: {
    height: 500,
    backgroundColor:'#F3E5E1',
    borderColor:'red',
    borderRadius:'20'
  },
  empty: {
    height: 100,
    
  },

});
