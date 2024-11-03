import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

type TagProps = {
    title: string;
    onPress: () => void;  
    isSelected: boolean;  
};

const Tag: React.FC<TagProps> = ({ title, onPress, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.tag, isSelected && styles.selectedTag]}>
                <Text style={styles.tagText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#363636',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 5,
    },
    selectedTag: {
        backgroundColor: '#9D9D9D', 
    },
    tagText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Tag;
