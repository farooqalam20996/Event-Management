import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { lightGray } from '../../assets/colors';

const Row = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}
export default Row;

const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor:lightGray,
        padding:hp('1.5%'),
        backgroundColor:'red'
    },
    text:{
        fontFamily:"Regular",
        fontSize:hp('2.2%')
    }
})