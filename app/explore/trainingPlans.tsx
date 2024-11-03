import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import trainingPlansData from './trainingPlan/trainingPlansData';

import Tag from '../components/Tag';
import TrainingCard from '../components/TrainingCard';

const TrainingPlans = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const opacity = useRef(new Animated.Value(0)).current;

  const tags = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredTraining = selectedTag === 'All' 
    ? trainingPlansData 
    : trainingPlansData.filter(training => training.difficulty === `${selectedTag}`);

  useEffect(() => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [selectedTag]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Stack.Screen options={{ headerShown: true, title: 'Training Plans' }} />
      <View style={styles.contentContainer}>
        
        <View style={styles.tagsContainer}>
          {tags.map(tag => (
            <Tag 
              key={tag} 
              title={tag} 
              onPress={() => setSelectedTag(tag)} 
              isSelected={selectedTag === tag}    
            />
          ))}
        </View>

        <Animated.View style={{ opacity }}>
          {filteredTraining.map(training => (
            <TrainingCard 
              key={training.id} 
              title={training.title} 
              img={training.img} 
              duration = {training.duration}
              trainings = {training.trainings}
              difficulty = {training.difficulty}
              href={`./trainingPlan/${training.id}`} 
            />
          ))}
        </Animated.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#121212',
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
  tagsContainer: { 
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 330,
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 20,
  },
});

export default TrainingPlans;
