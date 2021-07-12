import React from 'react';
import {
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '../../theme/ThemeContext';
// import { useTheme } from '@react-navigation/native'; 

export const Container = (props) => {
    const {colors, isDark} = useTheme();
    return(
        <View style={[{flex:1, padding:hp('3.5%'), backgroundColor:isDark? "white":"black", paddingTop:hp('5%'), paddingBottom:0},props.style]}>
            {props.children}
        </View>
    )
}