import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { lightGray } from '../../assets/colors';

const Row = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.text}</Text>
        </View>
    )
}
export default Row;

const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor:lightGray,
        padding:hp('2%'),
    }
})