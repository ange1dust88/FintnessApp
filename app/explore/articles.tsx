import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import ArticleCard from '../components/ArticleCard';
import Tag from '../components/Tag';
import { Stack } from 'expo-router';

const Articles = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const opacity = useRef(new Animated.Value(0)).current;

  const articleData = [
    { id: '0', title: 'Muscle Gain Tips', description: 'Essential tips for muscle growth.', img: require('./article/assets/trainingGain.jpg'), tag: '#bodybuilding' },
    { id: '1', title: 'Importance of Core', description: 'Key exercises for core strength.', img: require('./article/assets/trainingImportanceOfCore.jpg'), tag: '#bodybuilding' },
    { id: '2', title: 'Calisthenics Fundamentals', description: 'Basics of bodyweight training.', img: require('./article/assets/trainingPull.jpg'), tag: '#calisthenics' },
    { id: '3', title: 'Bodybuilding Nutrition Essentials', description: 'Nutrition tips for muscle building.', img: require('./article/assets/articlesFood.webp'), tag: '#bodybuilding' },
    { id: '4', title: 'Powerlifting: The Big Three', description: 'Theory behind squats, deadlifts, and bench press.', img: require('./article/assets/bigThree.jpg'), tag: '#powerlifting' },
    { id: '5', title: 'Advanced Bodyweight Techniques', description: 'Explore advanced calisthenics moves.', img: require('./article/assets/trainingMuscleUps.jpg'), tag: '#calisthenics' }
];


  const tags = ['All', 'bodybuilding', 'calisthenics', 'powerlifting'];

  const filteredArticles = selectedTag === 'All' 
    ? articleData 
    : articleData.filter(article => article.tag === `#${selectedTag}`);

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
      <Stack.Screen options={{ 
        headerShown: true,
        title: 'Articles' }} />
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
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              title={article.title} 
              description={article.description} 
              img={article.img} 
              tag={article.tag} 
              href={`./article/${article.id}`}
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
    flexDirection: 'row',
    maxWidth: 330,
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 20,
  },
});

export default Articles;
