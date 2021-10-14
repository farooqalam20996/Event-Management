import React, { useContext } from 'react';
import { 
    View,
    Text,
    Image
 } from 'react-native';
import { ThemeContext } from '../../theme/ThemeContext';
function AuthScreen(props) {

    const {colors} = useContext(ThemeContext)

    return (
        <View style={{ flex:1 , justifyContent:'center' , alignItems:'center', backgroundColor:colors.background}} >
            <Image source={require('../../assets/images/logo.png')} style={{ width:'50%' , height:'50%' , resizeMode:"center" }} />
        </View>
    );
}

export default AuthScreen;