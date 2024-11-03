
import { Link, router } from 'expo-router';
import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';

const StartingScreen = () => {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to FitnessApp!</Text> 
          <Text style={styles.message}>
            We're excited to have you here! Let's set up your profile so you can get the most out of FitnessApp.
          </Text>
          <Text style={styles.instructions}>
            In the next steps, we'll ask you a few questions to personalize your experience. It won't take long!
          </Text>

          <TouchableOpacity style ={styles.button} onPress={() => router.push('./Nickname')}>
          <Text style={styles.buttonText}> Get Started</Text>
        </TouchableOpacity>
        </View>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    message: {
      color: '#b0b0b0',
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
    instructions: {
      color: '#b0b0b0',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 30,
    },
    button: {
      backgroundColor: '#363636',
      borderRadius: 18,
      paddingVertical: 10,
      paddingHorizontal: 40,
      alignItems: 'center',
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default StartingScreen;
