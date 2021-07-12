import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { primary, white } from '../../assets/colors';
import { Regular } from '../../assets/fonts';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>LOGO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        color: white,
        fontFamily:Regular
    }
})

export default Login;