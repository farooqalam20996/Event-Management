import React from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, lightGray, primary } from '../../assets/colors';
import { Feather, Ionicons } from '@expo/vector-icons';

const Row = (props) => {
    return(
        <TouchableWithoutFeedback>
            <View style={[styles.container]}>
                {props.iconLeft
                    ? <Ionicons name={props.iconLeft} size={18} color={black} /> 
                    : <View style={{height:18}}/>
                }
                <Text style={styles.text}>{props.text}</Text>
                {props.icon 
                    ? <Feather name="arrow-right" size={18} color={primary} /> 
                    : <View style={{height:18}}/>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Row;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:lightGray,
        padding:hp('1.5%'),
        paddingTop:hp('2%'),
        paddingBottom:hp('2%'),
    },
    text:{
        fontFamily:"Regular",
        fontSize:hp('2%')
    }
})