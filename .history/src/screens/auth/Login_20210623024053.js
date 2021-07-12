import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { primary, white } from '../../assets/colors';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>LOGO</Text>
            {/* <Text style={styles.logo}>Sign in</Text> */}
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
        fontFamily:"Bold",
        fontSize: hp('5%'),
        // letterSpacing:1
    }
})

export default Login;