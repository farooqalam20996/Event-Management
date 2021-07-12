import React from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { lightGray } from '../../assets/colors';
import { Feather } from '@expo/vector-icons';

const Row = (props) => {
    return(
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.text}>{props.text}</Text>
                <Feather name="arrow-right" size={24} color="black" />
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Row;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderTopColor:lightGray,
        padding:hp('1.5%'),
        paddingTop:hp('2%'),
        paddingBottom:hp('2%'),
    },
    text:{
        fontFamily:"Regular",
        fontSize:hp('2.2%')
    }
})