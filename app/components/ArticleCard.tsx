import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';

type TrainingCardProps = {
    title: string;
    description: string; 
    img: number; 
    tag: string;
    href: string; 
};

const ArticleCard: React.FC<TrainingCardProps> = ({ title, description, img, tag, href }) => {
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
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.tag}>{tag}</Text>
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
        height: 150,
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 26,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'space-around',
        height: '100%'
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
    tag: {
        fontSize: 12,
        color: '#fff',
        marginTop: 4,
        backgroundColor: '#9D9D9D',
        borderColor: '#9D9D9D',
        borderRadius: 10,
        paddingVertical: 2,
        width: 100,
        textAlign: 'center',
        overflow: 'hidden',
    },
    image: {
        width: 130,
        height: '100%',
        borderRadius: 5,
    },
});

export default ArticleCard;
