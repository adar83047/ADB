import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const width = 150;

export default function HomeScreen() {


  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#21150d" />
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style = {styles.Text}>Dawat Dost!!!</Text>
        <Image source={require('../../../assets/images/logo.jpg')} style={styles.image} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
            Chickens
        </Text>
      </View>

        </SafeAreaView> 
    </>)}


const styles = StyleSheet.create({
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
