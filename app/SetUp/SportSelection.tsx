import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../Firebase_config'; 

const SportSelection = () => {
    const [selectedSport, setSelectedSport] = useState(null);
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const handleContinue = async () => {
        if (selectedSport) {
            try {
                if (userId) {
                    const userRef = doc(FIREBASE_DB, 'users', userId);
                    await updateDoc(userRef, {
                        sport: selectedSport, 
                    });
                    console.log('Sport updated:', selectedSport);
                    router.push('./LevelSelection'); 
                } else {
                    Alert.alert('User Error', 'User not logged in. Please log in first.');
                }
            } catch (error) {
                Alert.alert('Error', 'Could not update sport. Please try again.');
                console.error('Error updating document: ', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What sport do you prefer?</Text>
            <Text style={styles.instructions}>
                Please select one of the options below.
            </Text>

            <TouchableOpacity 
                style={[styles.sportButton, selectedSport === 'calisthenics' && styles.selectedButton]} 
                onPress={() => setSelectedSport('calisthenics')}
            >
                <Text style={styles.buttonText}>Calisthenics</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.sportButton, selectedSport === 'bodybuilding' && styles.selectedButton]} 
                onPress={() => setSelectedSport('bodybuilding')}
            >
                <Text style={styles.buttonText}>Bodybuilding</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.sportButton, selectedSport === 'powerlifting' && styles.selectedButton]} 
                onPress={() => setSelectedSport('powerlifting')}
            >
                <Text style={styles.buttonText}>Powerlifting</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.continueButton, !selectedSport && styles.disabledButton]} 
                onPress={handleContinue}
                disabled={!selectedSport} 
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
    sportButton: {
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

export default SportSelection;
