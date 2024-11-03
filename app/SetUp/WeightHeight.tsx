import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../Firebase_config'; 

const WeightHeight = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const handleContinue = async () => {
        const weightNumber = parseFloat(weight);
        const heightNumber = parseFloat(height);

        if (!isNaN(weightNumber) && !isNaN(heightNumber) && weightNumber > 0 && heightNumber > 0) { 
            try {
                if (userId) {
                    const userRef = doc(FIREBASE_DB, "users", userId);
                    await updateDoc(userRef, {
                        weight: weightNumber, 
                        height: heightNumber, 
                    });
                    console.log("Weight and height updated:", { weight: weightNumber, height: heightNumber });
                    router.push('./MoveGoal'); 
                } else {
                    Alert.alert("User Error", "User not logged in. Please log in first.");
                }
            } catch (error) {
                Alert.alert("Error", "Could not update weight and height. Please try again.");
                console.error("Error updating document: ", error);
            }
        } else {
            Alert.alert("Input Error", "Please enter valid positive numbers for weight and height.");
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.title}>Enter Your Weight and Height</Text>
                    <Text style={styles.instructions}>
                        Please enter your weight and height below. This information will help us calculate your calorie expenditure accurately.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Weight (kg)"
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={setWeight}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Height (cm)"
                        keyboardType="numeric"
                        value={height}
                        onChangeText={setHeight}
                    />
                    <TouchableOpacity 
                        style={[styles.button, (!weight || !height) && styles.disabledButton]} 
                        onPress={handleContinue}
                        disabled={!weight || !height} 
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    inner: {
        flex: 1,
        padding: 20,
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
    instructions: {
        color: '#b0b0b0',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        height: 50,
        width: '100%',
        backgroundColor: '#9D9D9D',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
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
    disabledButton: {
        backgroundColor: '#7a7a7a', 
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default WeightHeight;
