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
import {useTheme} from '../../theme/ThemeContext'; 

const Row = ({data, icon, onPress}) => {
    const {colors} = useTheme()
    const {text, action, iconLeft } = data;
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {iconLeft && <Ionicons name={iconLeft} size={18} color={primary} style={{marginRight:10}} /> }
                    <Text style={[styles.text,{color:colors.heading}]}>{text}</Text>
                </View>
                {icon 
                    ? <Feather name={icon} size={18} color={primary} /> 
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
        minHeight:hp('6.5%'),
        padding:hp('1.5%'),
    },
    text:{
        fontFamily:"Regular",
        fontSize:hp('2%'),
    }
})