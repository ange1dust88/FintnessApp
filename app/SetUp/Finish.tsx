import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';

const Finish = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setup Complete!</Text>
      <Text style={styles.message}>Thank you for completing the setup process.</Text>
      <Text style={styles.thanks}>We appreciate your effort!</Text>
      <TouchableOpacity 
                style={styles.button} 
                onPress={() => router.push('/Explore')}
            >
                <Text style={styles.buttonText}>Continue</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  thanks: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9D9D9D',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default Finish;
