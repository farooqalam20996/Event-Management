import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Button = ({onPress, color, text, textColor, image, style, Loading, disabled}) => {
    return(
        <TouchableOpacity disabled={Loading || disabled} onPress={onPress} style={[styles.container,{backgroundColor:color}, style]}>
           {
               Loading?
                    <ActivityIndicator size="small" color="white" />
                    :
                    <>
                        {image && <Image style={styles.image} source={image}/>}
                        <Text style={[styles.text,{color: textColor}]}>{text}</Text>
                    </>
           }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:'80%',
        height:hp('5.5%'),
        marginTop:hp('2.5%'),
        borderRadius:hp('1%'),
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:"Regular",
        fontSize:hp('2%')
    },
    image:{
        height:hp('3%'),
        width:'7%',
        marginRight:hp('2%')
    }
})