import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddPriority = props => {

    const navigation = useNavigation();

    const [priorityTitle, setPriorityTitle] = useState('');
    const [priorityDescription, setPriorityDescription] = useState('');

    const onAddPriority = () => {
        if (!priorityTitle){
            alert('Please enter a priority title.');
            return;
        }
        if (!priorityDescription){
            alert('Please enter a priority description.');
            return;
        }
        
        try {
            database.addPriority(priorityTitle, priorityDescription);
        } catch (error) {
            console.log('Error adding priority ' + error);
        }

        alert(priorityTitle + ' Added!');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput 
                    value={priorityTitle}
                    onChangeText={value => setPriorityTitle(value)}
                    style={styles.title}
                    clearButtonMode={'while-editing'}
                    placeholder={'Enter Priority Title'}
                    placeholderTextColor={'grey'}
                />
                <TextInput 
                    value={priorityDescription}
                    onChangeText={value => setPriorityDescription(value)}
                    style={styles.description}
                    clearButtonMode={'while-editing'}
                    placeholder={'Enter Priority Description'}
                    placeholderTextColor={'grey'}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.button} onPress={onAddPriority}>
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
        </View>
      );
};

export default AddPriority;