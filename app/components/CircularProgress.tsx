import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progress?: number; 
  maxProgress?: number;
  steps?: number; 
  distance?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  progress = 0,
  maxProgress = 100, 
  steps = 0, // Default to 0
  distance = 0, // Default to 0
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Ensure that progress is not negative
  const safeProgress = Math.max(progress, 0);
  
  const strokeDashoffset = circumference - (Math.min(safeProgress, maxProgress) / maxProgress) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke='#3B1924'
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke='#E92D58'
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>

      <View style={styles.textContainer}>
        {steps !== undefined && (
          <>
            <View style={styles.lineContainer}>
              <Text style={styles.headerText}>Move </Text>
              <Text style={styles.textRed}>{safeProgress.toFixed(2)}/{maxProgress}</Text>
            </View>
            <View style={styles.lineContainer}>
              <Text style={styles.headerText}>Steps </Text>
              <Text style={styles.textGray}>{steps > 0 ? steps : '0'}</Text>
            </View>
          </>
        )}
        {distance !== undefined && (
          <View style={styles.lineContainer}>
            <Text style={styles.headerText}>Distance </Text>
            <Text style={styles.textGray}>{distance > 0 ? distance.toFixed(2) : '0.00'} KM</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
  },
  textRed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E92D58', 
  },
  textGray: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9D9D9D', 
  },
  lineContainer: {
    flexDirection: 'row',
  },
});

export default CircularProgress;
