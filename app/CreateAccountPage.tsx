import { useRouter } from "expo-router";
import { useState } from "react";
import { Stack } from 'expo-router';
import { ActivityIndicator, StyleSheet, TextInput, View, Text, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../Firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(FIREBASE_DB, "users", user.uid), {
        email,
        name: '',
        gender: null,
        height: null, 
        weight: null,
        level: null,
        image: null,
        sport: null,
        moveGoal: null,
      });

      Alert.alert("Signup Success", "Your account has been created successfully!");
      router.replace('./'); 
    } catch (error) {
      Alert.alert("Signup Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.header}>Create Your Account</Text>
        <Text style={styles.desc}>Please fill in the details below to create your account.</Text>
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
          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.createAccountText}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push('./')}>
          <Text style={styles.signUpText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountPage;

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
  desc: {
    fontSize: 14,
    color: '#b0b0b0',
    textAlign: 'center',
    width: 350,
    paddingTop: 7,
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
