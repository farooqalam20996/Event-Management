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
import { useNavigation } from '@react-navigation/native';

const Row = ({data},props) => {
    const {colors} = useTheme()
    const navigation = useNavigation();
    const {text, action, iconLeft, icon} = data;
    return(
        <TouchableWithoutFeedback onPress={()=>navigation.navigate(action)}>
            <View style={styles.container}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {iconLeft && <Ionicons name={iconLeft} size={18} color={primary} style={{marginRight:10}} /> }
                    <Text style={[styles.text,{color:colors.heading}]}>{text}</Text>
                </View>
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
        fontSize:hp('2%'),
    }
})