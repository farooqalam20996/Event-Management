import React from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { lightGray } from '../../assets/colors';

const Row = (props) => {
    return(
        <TouchableWithoutFeedback style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Row;

const styles = StyleSheet.create({
    container:{
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