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
            <TouchableOpacity style={[styles.button,{marginRight:hp('1%')}]}>
                <Ionicons style={styles.icon} name={props.button1Icon} size={16} color={white} />
                <Text style={styles.text}>{props.button1Text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{marginLeft:hp('1%')}]}>
            <Ionicons style={styles.icon} name={props.button2Icon} size={16} color={white} />
                <Text style={styles.text}>{props.button2Text}</Text>
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
        height:hp('5%'),
        backgroundColor:primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp('1%')
    },
    icon:{
        flex:1,
        marginHorizontal:hp('1.5%'),
    },
    text:{
        color:white,
        fontFamily:"Regular",
        fontSize:hp("2%"),
        letterSpacing:1,
        flex:6,
        // textAlign:'center'
    }
    
})