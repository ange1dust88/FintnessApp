import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FIREBASE_DB } from '../../Firebase_config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { Stack } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'; 

const Settings = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [level, setLevel] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [sport, setSport] = useState('');
  const [moveGoal, setMoveGoal] = useState('');

  const [levelOpen, setLevelOpen] = useState(false);
  const [sportOpen, setSportOpen] = useState(false);

  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const userDoc = await getDoc(doc(FIREBASE_DB, "users", userId));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setName(userData.name || '');
          setHeight(userData.height?.toString() || '');
          setWeight(userData.weight?.toString() || '');
          setLevel(userData.level || '');
          setImage(userData.image || null);
          setSport(userData.sport || '');
          setMoveGoal(userData.moveGoal?.toString() || '');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

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
          Authorization: 'Client-ID a14e3e13b81379e', 
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

  const saveUserData = async () => {
    if (!userId) return;

    try {
      const userData = {
        name,
        image,
        height,
        weight,
        level,
        sport,
        moveGoal,
      };

      if (image) {
        const imageLink = await uploadImageToImgur(image); 
        userData.image = imageLink; 
      }

      await setDoc(doc(FIREBASE_DB, "users", userId), userData);
      alert('Data saved successfully!');
    } catch (error) {
      console.error("Error saving user data:", error);
      alert('Failed to save data');
    }
  };

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri); 
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
        setImage(result.assets[0].uri); 
      }
    } else {
      Alert.alert('Permission Required', 'You need to allow camera access.');
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Settings', headerShown: true }} />
      
      <TouchableOpacity onPress={openImagePicker} style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : (
          <Image 
              source={require('../assets/defAvatar.jpg')} 
              style={styles.avatar}
            />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={openCamera} >
        <MaterialIcons name="camera" size={30} color={'#fff'} style = {styles.iconText} />
      </TouchableOpacity>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Height (cm)" value={height} onChangeText={setHeight} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Weight (kg)" value={weight} onChangeText={setWeight} style={styles.input} keyboardType="numeric" />

      <DropDownPicker
        open={levelOpen}
        value={level}
        items={[
          { label: 'Beginner', value: 'beginner' },
          { label: 'Intermediate', value: 'intermediate' },
          { label: 'Advanced', value: 'advanced' },
        ]}
        setOpen={setLevelOpen}
        setValue={setLevel}
        placeholder="Select Level"
        containerStyle={[styles.dropdownContainer, { zIndex: 5000 }]} 
        style={styles.dropdown}
      />

      <DropDownPicker
        open={sportOpen}
        value={sport}
        items={[
          { label: 'Calisthenics', value: 'calisthenics' },
          { label: 'Bodybuilding', value: 'bodybuilding' },
          { label: 'Powerlifting', value: 'powerlifting' },
        ]}
        setOpen={setSportOpen}
        setValue={setSport}
        placeholder="Select Sport"
        containerStyle={[styles.dropdownContainer, { zIndex: 4000 }]}
        style={styles.dropdown}
      />

      <TextInput placeholder="Move Goal" value={moveGoal} onChangeText={setMoveGoal} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity 
                        style={styles.button} 
                        onPress={saveUserData}
                    >
                        <Text style={styles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
    flex: 1,

  },
  avatarContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
  },
  iconText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'light',
    marginBottom: 10
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

export default Settings;
