import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import ExploreCard from '../components/exploreCard';
import { Stack } from 'expo-router';


const Explore = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Stack.Screen 
                    options={{ 
                    headerShown: false
                    }} 
                />
                <ExploreCard title="Training Plans" img={require('../assets/trainingPlansCard.jpg')} href="/explore/trainingPlans" />
                <ExploreCard title="Articles" img={require('../assets/articlesCard.jpg')} href="/explore/articles" />
                <ExploreCard title="Nutrition" img={require('../assets/nutritionCard.png')} href="/explore/nutrition" />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 49,
    },
});

export default Explore;
