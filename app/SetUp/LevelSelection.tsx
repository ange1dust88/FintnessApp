import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../Firebase_config'; // Adjust the import path as necessary

const LevelSelection = () => {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const handleContinue = async () => {
        if (selectedLevel) {
            try {
                if (userId) {
                    const userRef = doc(FIREBASE_DB, 'users', userId);
                    await updateDoc(userRef, {
                        level: selectedLevel, 
                    });
                    console.log('Level updated:', selectedLevel);
                    router.push('./ImgSelection'); 
                } else {
                    Alert.alert('User Error', 'User not logged in. Please log in first.');
                }
            } catch (error) {
                Alert.alert('Error', 'Could not update level. Please try again.');
                console.error('Error updating document: ', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is your fitness level?</Text>
            <Text style={styles.instructions}>
                Please select one of the options below so we can tailor our recommendations to your fitness journey.
            </Text>

            <TouchableOpacity 
                style={[styles.levelButton, selectedLevel === 'beginner' && styles.selectedButton]} 
                onPress={() => setSelectedLevel('beginner')}
            >
                <Text style={styles.buttonText}>Beginner</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.levelButton, selectedLevel === 'intermediate' && styles.selectedButton]} 
                onPress={() => setSelectedLevel('intermediate')}
            >
                <Text style={styles.buttonText}>Intermediate</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.levelButton, selectedLevel === 'advanced' && styles.selectedButton]} 
                onPress={() => setSelectedLevel('advanced')}
            >
                <Text style={styles.buttonText}>Advanced</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.continueButton, !selectedLevel && styles.disabledButton]} 
                onPress={handleContinue}
                disabled={!selectedLevel} 
            >
                <Text style={styles.continueText}>Continue</Text>
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
    levelButton: {
        backgroundColor: '#9D9D9D',
        width: 200,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    selectedButton: {
        backgroundColor: '#5D5D5D', 
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    continueButton: {
        backgroundColor: '#363636',
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignItems: 'center',
        marginTop: 20,
    },
    disabledButton: {
        backgroundColor: '#7a7a7a', 
    },
    continueText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LevelSelection;
