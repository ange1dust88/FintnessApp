import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../Firebase_config'; 

const MoveGoal = () => {
    const [calories, setCalories] = useState('');
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const handleContinue = async () => {
        const caloriesNumber = parseFloat(calories);

        if (!isNaN(caloriesNumber) && caloriesNumber > 0) { 
            try {
                if (userId) {
                    const userRef = doc(FIREBASE_DB, "users", userId);
                    await updateDoc(userRef, {
                        moveGoal: caloriesNumber, 
                    });
                    router.push('./SportSelection'); 
                } else {
                    Alert.alert("User Error", "User not logged in. Please log in first.");
                }
            } catch (error) {
                Alert.alert("Error", "Could not update calorie goal. Please try again.");
                console.error("Error updating document: ", error);
            }
        } else {
            Alert.alert("Input Error", "Please enter a valid positive number for daily calorie goal.");
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.title}>Set Your Daily Calorie Goal</Text>
                    <Text style={styles.instructions}>
                        Please enter how many calories you want to burn each day.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Calories (kcal)"
                        keyboardType="numeric"
                        value={calories}
                        onChangeText={setCalories}
                    />
                    <TouchableOpacity 
                        style={[styles.button, !calories && styles.disabledButton]} 
                        onPress={handleContinue}
                        disabled={!calories} 
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

export default MoveGoal;
