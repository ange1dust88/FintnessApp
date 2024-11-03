import { Stack, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import recipeData from './recipeData';

const Recipe = () => {
  const { id } = useGlobalSearchParams();
  const recipeId = typeof id === 'string' ? id : '';
  const recipe = recipeData.find(receipt => receipt.id === recipeId);

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title:  ' ',headerShown: true }} />  
      {recipe ? (
        <>
          <Image source={recipe.img} style={styles.image} />
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.info}>Time: {recipe.time} min</Text>
          <Text style={styles.info}>Calories: {recipe.cal} Cal</Text>
          <Text style={styles.description}>{recipe.description}</Text>
          
          <Text style={styles.header}>Ingredients:</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              - {ingredient}
            </Text>
          ))}
          
          <Text style={styles.header}>Cooking Steps:</Text>
          <View style={styles.steps}>
            {recipe.steps.map((step, index) => (
              <Text key={index} style={styles.step}>
                {index + 1}. {step}
              </Text>
            ))}
          </View>
        </>
      ) : (
        <Text>Recipe not found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff'
  },
  info: {
    marginVertical: 5,
    fontSize: 16,
    color: '#fff'
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    color: '#fff'
  },
  ingredient: {
    fontSize: 14,
    marginLeft: 10,
    color: '#fff'
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff'
  },
  step: {
    fontSize: 14,
    marginLeft: 10,
    color: '#fff',
    margin: 5
  },
  steps: {
    paddingBottom: 60
  }
});

export default Recipe;
