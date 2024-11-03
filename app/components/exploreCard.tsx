import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'expo-router';

type ExploreCardProps = {
    title: string;
    img: string | number;
    href: string;
};

const ExploreCard: React.FC<ExploreCardProps> = ({ title, img, href }) => {
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
        <Link href={href} asChild>
            <TouchableOpacity
                activeOpacity={0.85}  
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                    {img && <Image source={typeof img === 'string' ? { uri: img } : img} style={styles.image} />}
                    <View style={styles.grayBox}></View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
        width: 330,
        height: 174,
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    grayBox: {
        backgroundColor: '#363636',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.5,
    },
});

export default ExploreCard;
