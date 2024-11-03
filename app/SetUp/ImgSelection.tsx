import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../Firebase_config'; 

const ImgSelection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const uploadImageToImgur = async (imageUri: string) => {
        const formData = new FormData();
        
        formData.append('image', {
            uri: imageUri,
            type: 'image/jpeg', 
            name: 'image.jpg',   
        } as any); 
    
        try {
            const response = await fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                headers: {
                    Authorization: 'Client-ID ***', 
                },
                body: formData,
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Image uploaded successfully:', data.data.link);
                return data.data.link; 
            } else {
                console.error('Upload failed:', data);
                throw new Error('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };
    

    const handleContinue = async () => {
        if (selectedImage) {
            const imgurUrl = await uploadImageToImgur(selectedImage);
            if (imgurUrl && userId) {
                try {
                    const userRef = doc(FIREBASE_DB, 'users', userId);
                    await updateDoc(userRef, {
                        image: imgurUrl,
                    });
                    console.log('Profile image updated:', imgurUrl);
                    router.push('./Finish');
                } catch (error) {
                    Alert.alert('Error', 'Could not update profile image. Please try again.');
                    console.error('Error updating document: ', error);
                }
            }
        } else {
            Alert.alert('Selection Error', 'Please select an image before continuing.');
        }
    };

    const openImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted) {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled && result.assets && result.assets.length > 0) {
                setSelectedImage(result.assets[0].uri); 
            }
        } else {
            Alert.alert('Permission Required', 'You need to allow access to the media library.');
        }
    };

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted) {
            const result = await ImagePicker.launchCameraAsync();
            if (!result.canceled && result.assets && result.assets.length > 0) {
                setSelectedImage(result.assets[0].uri); 
            }
        } else {
            Alert.alert('Permission Required', 'You need to allow camera access.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Profile Image</Text>
            <Text style={styles.instructions}>
                You can either take a new photo or choose one from your gallery.
            </Text>

            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
            )}

            <TouchableOpacity style={styles.button} onPress={openCamera}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openImagePicker}>
                <Text style={styles.buttonText}>Select from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.continueButton, !selectedImage && styles.disabledButton]} 
                onPress={handleContinue}
                disabled={!selectedImage} 
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
    imagePreview: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#9D9D9D',
        width: 200,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
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

export default ImgSelection;
