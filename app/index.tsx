import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { Stack } from 'expo-router';
import { ActivityIndicator, StyleSheet, TextInput, View, Alert, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../Firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userId = response.user.uid;

      const userDoc = await getDoc(doc(FIREBASE_DB, 'users', userId));
      if (userDoc.exists()) {
        const { name, weight, height, level } = userDoc.data();
        
        if (name && weight && height && level) {
          router.replace('/Explore'); 
        } else {
          router.push('./SetUp/StartingScreen')
        }
      } else {
        router.push('./SetUp/StartingScreen')
      }

    } catch (error) {
      Alert.alert("Login Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.welcomeContainer}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.desc}>We're glad to have you here! Please log in to access your account.</Text>
      </View>

      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.BtnContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.createAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('./CreateAccountPage')}>
          <Text style={styles.signUpText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'space-around', 
    alignContent: 'center'
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 15,
  },
  mainContainer: {
    width: '100%',
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  header: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 45,
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
  createAccountText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomContainer: {
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  desc: {
    fontSize: 14,
    color: '#b0b0b0',
    textAlign: 'center',
    width: 350,
    paddingTop: 7,
  },
  BtnContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
});
