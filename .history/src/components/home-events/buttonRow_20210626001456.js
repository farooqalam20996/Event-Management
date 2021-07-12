import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { primary, white } from '../../assets/colors';

const ButtonRow = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button,{marginLeft:hp('1%')}]}>
                <Ionicons name={props.button1Icon} size={24} color={white} />
                <Text>{props.button1Text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{marginRight:hp('1%')}]}>
            <Ionicons name={props.button2Icon} size={24} color={white} />
                <Text>{props.button2Text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonRow;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('2%'),
        flexDirection:'row',
    },
    button:{
        flex:1,
        flexDirection:'row',
        height:hp('3%'),
        backgroundColor:primary,
    }
    
})