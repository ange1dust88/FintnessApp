import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { FIREBASE_DB } from '../../Firebase_config';
import { doc, getDoc, onSnapshot  } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { MaterialIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null; 

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const unsubscribe = () => {
      if (!userId) {
        console.log('User is not authenticated');
        return; 
      }
  
      console.log('Listening for user data changes for userId:', userId); 
      const userRef = doc(FIREBASE_DB, 'users', userId);
      return onSnapshot(userRef, (userDoc) => {
        if (userDoc.exists()) {
          console.log('User data updated:', userDoc.data()); 
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      }, (error) => {
        console.error('Error fetching user data:', error);
      });
    };
  
    const unsubscribeFromAuth = unsubscribe();
  
    return () => {
      if (unsubscribeFromAuth) unsubscribeFromAuth();
    };
  }, [userId]);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}> 
        <View style={styles.headerContainer}>
          <MaterialIcons name="settings" size={25} color={'#121212'} />
          <Text style={styles.nickName}>{userData ? userData.name : 'Loading...'}</Text>
          <Link href="/settings/settings">
            <MaterialIcons name="settings" size={25} color={'#fff'} />
          </Link>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.line}></Text>
          {userData && userData.image ? (
            <Image 
              source={{ uri: userData.image }} 
              style={styles.image}
            />
          ) : (
            <Image 
              source={require('../assets/defAvatar.jpg')} 
              style={styles.image}
            />
          )}
          <Text style={styles.line}></Text>
        </View>
        <Text style={styles.athlete}>
          {userData && userData.sport ? `${capitalizeFirstLetter(userData.sport)} Athlete` : 'N/A'}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.wideLine}></Text>
        {userData ? (
          <>
            <Text style={styles.label}>Weight: {userData.weight ? `${userData.weight}kg` : 'N/A'}</Text>
            <Text style={styles.label}>Height: {userData.height ? `${userData.height}cm` : 'N/A'}</Text>
            <Text style={styles.label}>Level: {userData.level ? capitalizeFirstLetter(userData.level) : 'N/A'}</Text>
          </>
        ) : (
          <>
            {console.log('loading')}
          </>
        )}
        <Text style={styles.wideLine}></Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  lineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 15
  },
  progressContainer: {
    backgroundColor: '#151515',
    borderRadius: 5,
    height: 168,
    width: 168,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  infoContainer: {
    width: '100%', 
  },
  image: {
    width: 120,  
    height: 120, 
    borderRadius: 60, 
    marginLeft: 15,
    marginRight: 15
  },
  nickName: {
    color: '#fff',
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  athlete: {
    color: '#fff',
    fontSize: 20,
    margin: 13,
  },
  label: {
    color: '#fff',
    fontSize: 17,
    margin: 3,
  },
  line: {
    width: 80, 
    borderColor: '#fff',
    borderWidth: 1,
    height: 0, 
    marginTop: 60
  },
  wideLine: {
    width: '100%', 
    borderColor: '#fff',
    borderWidth: 1,
    height: 0, 
  }
});

export default Profile;
