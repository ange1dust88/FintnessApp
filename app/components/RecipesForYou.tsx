import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const RecipesForYou = ({ img, title, time, cal, href }) => {
    const [scale] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 1.05,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableOpacity
            onPress={() => router.push(href)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.85}
        >
            <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
                <View style={styles.TextContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.details}>{time}min   {cal}Cal</Text>
                </View>
                <Image source={img} style={styles.image} />

            </Animated.View>
        </TouchableOpacity>
    );
};

export default RecipesForYou;

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 100,
        borderRadius: 5,
        flexDirection: 'row', 
        overflow: 'hidden',
        alignItems: 'center', 
        backgroundColor: '#363636',
    },
    image: {
        width: 160, 
        height: '100%', 
        borderRadius: 5,
        resizeMode: 'cover', 
    },
    TextContainer: {
        flex: 1, 
        height: '100%',
        paddingLeft: 8,
        paddingTop: 5,
        justifyContent: 'center', 
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    details: {
        fontSize: 11,
        color: '#ffffff',
    },
});
