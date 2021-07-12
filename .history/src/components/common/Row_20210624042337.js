import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

const Row = (props) => {
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}
export default Row;

const styles = StyleSheet.create({
    
})