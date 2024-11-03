import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';

type TrainingCardProps = {
    title: string;
    img: number; 
    href: string; 
    duration: string;
    trainings: string;
    difficulty: string;

};

const TrainingCard: React.FC<TrainingCardProps> = ({ title, duration, trainings, difficulty, href, img }) => {
    const router = useRouter();
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
            <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        <Text style ={styles.description}>• {duration} weeks</Text>
                        <Text style ={styles.description}>• {trainings} trainings</Text>
                    </View>
                    <Text style ={styles.difficulty}>difficulty: {difficulty}</Text>
                </View>
                {img ? (
                    <Image source={img} style={styles.image} resizeMode="cover" />
                ) : (
                    <Text>Image not available</Text>
                )}
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#363636',
        borderRadius: 5,
        width: 330,
        height: 155,
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 26,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '100%',
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        paddingTop: 5,
    },
    description: {
        fontSize: 12,
        color: '#b0b0b0',
        marginTop: 4,
    },
    difficulty: {
        fontSize: 12,
        color: '#b0b0b0',
        marginTop: 4,
        alignSelf: 'flex-end'
    },
    image: {
        width: 150,
        height: '100%',
        borderRadius: 5,
    },
});

export default TrainingCard;
