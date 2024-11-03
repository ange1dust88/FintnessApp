import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Animated, Text } from 'react-native';
import { Stack } from 'expo-router';
import RecipeOfTheDay from '../components/RecipeOfTheDay';
import recipeData from './recipe/recipeData';
import RecommendedRecipe from '../components/RecommendedRecipe';
import RecipesForYou from '../components/RecipesForYou';

const NutritionPlans = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const recipeOfTheDay = recipeData[0];
  const recommendedRecipes = recipeData.slice(1, 3); 
  const recipesForYou = recipeData.slice(3);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Stack.Screen options={{headerShown: true, title: 'Nutrition Plans'}} />
      <View style={styles.contentContainer}>
          <RecipeOfTheDay
          key = {recipeOfTheDay.id}
          img={recipeOfTheDay.img}
          title={recipeOfTheDay.title}
          time={recipeOfTheDay.time}
          cal={recipeOfTheDay.cal}
          href={`./recipe/${recipeOfTheDay.id}`} 
        />
        <Text style = {styles.title}>Recommended</Text>
        <View style = {styles.recommendedRecipes}>
          {recommendedRecipes.map((item) => (
            <RecommendedRecipe 
              key={item.id}
              img={item.img}
              title={item.title}
              time={item.time}
              cal={item.cal}
              href={`./recipe/${item.id}`} 
            />
          ))}
        </View>
        <Text style = {styles.title}>Recipes for you</Text>
        <View style = {styles.RecipesForYou}> 
        {recipesForYou.map((item) => (
            <RecipesForYou 
              key={item.id}
              img={item.img}
              title={item.title}
              time={item.time}
              cal={item.cal}
              href={`./recipe/${item.id}`} 
            />
          ))}
        </View>
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
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  itemContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1e1e1e',
    width: '90%',
  },
  title: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'flex-start',
    textAlign: 'left', 
    width: '100%',
    paddingLeft: 43
  },
  description: {
    fontSize: 14,
    color: '#cccccc',
  },
  recommendedRecipes:{
    display: 'flex',
    flexDirection: 'row',
    gap: 30
  },
  RecipesForYou: {
    display: 'flex',
    gap: 26
  }
});

export default NutritionPlans;
