import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../Firebase_config'; 

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender); 
    };

    const handleContinue = async () => {
        if (selectedGender) {
            try {
                if (userId) {
                    const userRef = doc(FIREBASE_DB, "users", userId);
                    await updateDoc(userRef, {
                        gender: selectedGender,
                    });
                    console.log("Gender updated:", selectedGender);
                    router.push('./WeightHeight'); 
                } else {
                    Alert.alert("User Error", "User not logged in. Please log in first.");
                }
            } catch (error) {
                Alert.alert("Error", "Could not update gender. Please try again.");
                console.error("Error updating document: ", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What's your gender?</Text>
            <Text style={styles.instructions}>
                Please select your gender below.
            </Text>
            <TouchableOpacity 
                style={[styles.genderCircle, selectedGender === 'male' && styles.selectedCircle]} 
                onPress={() => handleGenderSelect('male')}
            >
                <MaterialIcons name="male" size={140} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.genderCircle, selectedGender === 'female' && styles.selectedCircle]} 
                onPress={() => handleGenderSelect('female')}
            >
                <MaterialIcons name="female" size={140} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, !selectedGender && styles.disabledButton]} 
                onPress={handleContinue}
                disabled={!selectedGender} 
            >
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
    disabledButton: {
        backgroundColor: '#7a7a7a', 
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    genderCircle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9D9D9D',
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 10,
        margin: 10,
    },
    selectedCircle: {
        backgroundColor: '#5D5D5D', 
    },
});

export default Gender;
