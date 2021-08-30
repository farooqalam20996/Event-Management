import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { gray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import IconInput from '../../components/common/IconInput';
import { useTheme } from '../../theme/ThemeContext'
import UserSignup from '../../components/auth/signup/UserSignup';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const navigation = useNavigation()
    const {colors} = useTheme();

    const onSignupPress = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={[styles.container,{backgroundColor:colors.primary}]}>
            <Text style={styles.logo}>LOGO</Text>
            <Text style={styles.heading}>Sign up</Text>
            <UserSignup onSignupPress={onSignupPress/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        // justifyContent:'center',
        alignItems:'center',
        paddingTop:hp('20%')
    },
    logo:{
        color: white,
        fontFamily:"Bold",
        fontSize: hp('5%'),
        letterSpacing:1
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Light",
        color:white,
        marginTop:hp('5%')
    },
    lineContainer:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('2.75%')
    },
    line:{
        backgroundColor:white,
        height:hp('0.1%'),
        width:'38%',
    },
    orText:{
        color:white,
        marginLeft:hp('2.5%'),
        marginRight:hp('2.5%'),
        fontFamily:'Regular'
    }
})

export default Signup;