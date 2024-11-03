import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import CircularProgress from '../components/CircularProgress';
import useStepCounter from '../components/useStepCounter ';
import { FIREBASE_DB } from '../../Firebase_config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const Summary = () => {
  const [userData, setUserData] = useState<any>(null);
  const [storedSteps, setStoredSteps] = useState<number>(0); 
  const { steps: pedometerSteps, isPedometerAvailable } = useStepCounter();
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null; 
  const today = new Date().toISOString().split('T')[0]; 

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const userDoc = await getDoc(doc(FIREBASE_DB, 'users', userId));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log('No such user document!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchStoredSteps = async () => {
      if (!userId) return;

      try {
        const stepsDoc = await getDoc(doc(FIREBASE_DB, 'dailySteps', `${userId}_${today}`));
        if (stepsDoc.exists()) {
          const data = stepsDoc.data();
          setStoredSteps(data.steps || 0); 
          console.log('Fetched stored steps:', data.steps);
        } else {
          setStoredSteps(0); 
          console.log('No steps stored for today, defaulting to 0');
        }
      } catch (error) {
        console.error('Error fetching stored steps:', error);
      }
    };

    fetchStoredSteps();
  }, [userId, today]);


  useEffect(() => {
    const storeSteps = async () => {
      if (!userId) return;

      const totalSteps = storedSteps + pedometerSteps;

      try {

        const stepsDoc = await getDoc(doc(FIREBASE_DB, 'dailySteps', `${userId}_${today}`));
        if (stepsDoc.exists()) {
          await setDoc(doc(FIREBASE_DB, 'dailySteps', `${userId}_${today}`), {
            steps: totalSteps,
            date: today,
          });
          console.log('Updated stored steps to:', totalSteps);
        } else {
          await setDoc(doc(FIREBASE_DB, 'dailySteps', `${userId}_${today}`), {
            steps: pedometerSteps,
            date: today,
          });
          console.log('Created new entry for steps:', pedometerSteps);
        }
      } catch (error) {
        console.error('Error storing daily steps:', error);
      }
    };

    if (pedometerSteps > 0) {
      storeSteps();
    }
  }, [pedometerSteps, storedSteps, userId, today]);
  const calculateDistance = (steps: number, height: number, gender: string): number => {
    let stepLength = gender === 'male' ? height * 0.415 : height * 0.413;
    return (steps * stepLength) / 100000; 
  };

  const calculateCaloriesBurned = (steps: number, weight: number): number => {
    const distance = calculateDistance(steps, userData.height, userData.gender);
    return weight * distance; 
  };

  const totalSteps = storedSteps + pedometerSteps;
  const caloriesBurned = userData ? calculateCaloriesBurned(totalSteps, userData.weight) : 0;
  const distance = userData ? calculateDistance(totalSteps, userData.height, userData.gender) : 0;

  return (
    <SafeAreaView style={styles.container}>
      <CircularProgress
        size={330}
        strokeWidth={45}
        steps={totalSteps}
        progress={caloriesBurned}
        maxProgress={userData?.moveGoal} 
        distance={distance}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    marginTop: 10,
  },
});

export default Summary;
