import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Categories</Text>
      {/* Additional content for categories can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E5E1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#21150d',
  },
});

export default CategoryScreen;