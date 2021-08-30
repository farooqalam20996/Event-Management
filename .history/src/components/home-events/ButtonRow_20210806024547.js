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

const ButtonRow = ({
    button1Icon,
    button1Text,
    button1Press,
    button2Icon,
    button2Text,
    button2Press,
}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={button1Press} style={[styles.button,{marginRight:hp('1%')}]}>
                <Ionicons style={styles.icon} name={button1Icon} size={16} color={white} />
                <Text style={styles.text}>{button1Text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={button2Press} style={[styles.button,{marginLeft:hp('1%')}]}>
            <Ionicons style={styles.icon} name={button2Icon} size={16} color={white} />
                <Text style={styles.text}>{button2Text}</Text>
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
        // marginLeft:hp('1%')
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