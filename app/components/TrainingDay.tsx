import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const TrainingDay = ({ day, exercises }) => {
    const [isVisible, setIsVisible] = useState(false);
    const animatedOpacity = useRef(new Animated.Value(0)).current; 


    useEffect(() => {
        Animated.timing(animatedOpacity, {
            toValue: isVisible ? 1 : 0, 
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isVisible]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Text style={styles.title}>Day {day}</Text>
            </TouchableOpacity>
            <Animated.View style={{ opacity: animatedOpacity }}>
                {isVisible && (
                    <View style={styles.hidden}>
                        {exercises.map((exercise, index) => (
                            <Text key={index} style={styles.exercise}>{exercise}</Text>
                        ))}
                    </View>
                )}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'center',
        padding: 5
    },
    container: {
        backgroundColor: '#363636',
        width: '100%',
        marginBottom: 10,
        borderRadius: 5
    },
    hidden: {
        backgroundColor: '#2F2E2E',
        padding: 10,
        borderRadius: 5
    },
    exercise: {
        color: '#b0b0b0',
        fontSize: 16,
        marginBottom: 5,
    },
});

export default TrainingDay;
