import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Priority = props => {

    const post = props.post;

    const onPress = () => {
        console.log(post.prioritytitle + ' ' + post.prioritydescription);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Priority;