import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const RecipeOfTheDay = ({ img, title, time, cal, href }) => {
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
                <ImageBackground source={img} style={styles.image}>
                    <View style={styles.tag}>
                        <Text>Recipe of the day</Text>
                    </View>
                    <View style={styles.grayContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.details}>{time}min   {cal}Cal</Text>
                    </View>
                </ImageBackground>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default RecipeOfTheDay;

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 200,
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    details: {
        fontSize: 10,
        color: '#ffffff',
    },
    grayContainer: {
        backgroundColor: '#363636',
        width: '100%',
        height: 50,
        opacity: 0.9,
        paddingLeft: 18,
        paddingTop: 8,
    },
    tag: {
        backgroundColor: '#D9D9D9',
        padding: 6,
        textAlign: 'right',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
});
