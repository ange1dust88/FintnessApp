import { Stack, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, ImageBackground, StyleSheet, ScrollView, View } from 'react-native';
import trainingPlansData from './trainingPlansData';
import TrainingDay from '../../components/TrainingDay';

const TrainingPlan = () => {
    const { id } = useGlobalSearchParams();
    const trainingId = typeof id === 'string' ? id : '';
    const trainingPlan = trainingPlansData.find(plan => plan.id === trainingId);

    if (!trainingPlan) {
        return <Text style={styles.notFound}>Training Plan Not Found</Text>;
    }

    const { title, img, duration, trainings, difficulty, days } = trainingPlan;

    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={{ headerShown: true, title: '' }} />
            <ImageBackground
                source={trainingPlan.img}
                style={styles.image}
                resizeMode="cover"
                >
                <LinearGradient
                colors={['transparent','transparent', '#121212']} 
                style = {styles.gradient}
                />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>{duration} weeks</Text>
                    <Text style={styles.info}>{trainings} trainings</Text>
                    <Text style={styles.info}>Difficulty: {difficulty}</Text>
                </View>
            </ImageBackground>

            {days ? Object.keys(days).map(day => (
                <View key={day} style={styles.dayContainer}>
                    <TrainingDay day={day} exercises={days[day]} />
                </View>
            )) : <Text style={styles.info}>No exercises available for this training plan.</Text>}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        paddingLeft: 10
    },
    info: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 5,
    },
    dayContainer: {
        padding: 10
    },
    notFound: {
        fontSize: 16,
        color: '#ff0000',
        textAlign: 'center',
        marginTop: 20,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    infoContainer: {
        padding: 10,
    }
});

export default TrainingPlan;
