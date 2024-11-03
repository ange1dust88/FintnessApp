import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { FIREBASE_DB } from '../../Firebase_config'; 
import { getAuth } from "firebase/auth";
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const Nickname = () => { 
    const [name, setName] = useState('');
    const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null; 

    const handleGetStarted = async () => {
        if (name.trim()) {
            try {
                const userRef = doc(FIREBASE_DB, "users", userId);
                await updateDoc(userRef, {
                    name: name,
                });
                console.log("Name updated:", name);  //delete after rel
                
                router.push('./Gender');
            } catch (error) {
                Alert.alert("Error", "Could not update name. Please try again.");
                console.error("Error updating document: ", error);   //delete after rel
            }
        } else {
            Alert.alert("Input Required", "Please enter your name.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What's your name?</Text>
            <Text style={styles.instructions}>
                Please enter your name to personalize your experience.
            </Text>
            <TextInput
                style={styles.input}
                value={name}
                placeholder="Enter your name"
                autoCapitalize="none"
                onChangeText={(text) => setName(text)}
            />
    
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Continue</Text>
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
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        fontSize: 15,
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

export default Nickname;
