import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, gray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import IconInput from '../../components/common/IconInput';
import { useTheme } from '../../theme/ThemeContext'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const {colors} = useTheme();

    const onSignInPress = () => {
        if(email == "business"){
            navigation.navigate('UserNavigator')
        }else {
            navigation.navigate('BusinessNavigator')
        }
        
    }
    const onCreateAccount = () => {
        navigation.navigate('Signup')
    }

    

    return (
        <View style={[styles.container,{backgroundColor:colors.primary}]}>
            <Text style={styles.logo}>LOGO</Text>
            <Text style={styles.heading}>Sign in</Text>
            <IconInput
                icon="mail"
                placeholder="Email Address"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
                keyboard={"email-address"}
            />
            <IconInput
                icon="key"
                pass
                placeholder="Password"
                value={password}
                onChange={(text)=>setPassword(text)}
                iconColor={gray}
                inputRef={input => inputRef = input}
            />
            
            <Button
                text="SIGN IN"
                color={purple}
                textColor={white}
                onPress={onSignInPress}
            />
            <View style={styles.lineContainer}>
                <View style={styles.line}/>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line}/>
            </View>
            <Button
                image={require('../../assets/images/google.png')}
                text="Sign in with Google"
                color={white}
                textColor={black}
            />
            <Button
                image={require('../../assets/images/fb.png')}
                icon="Facebook"
                text="Sign in with Facebook"
                color={white}
                textColor={black}
            />
            <Text style={{color:gray, fontSize:hp('2%'),paddingTop:hp('3%')}}>Don't have an account?</Text>
            <TouchableOpacity style={{marginTop:hp('1%')}} onPress={onCreateAccount}>
                <Text style={{color:white, fontSize:hp('2.25%'), marginTop:hp('0.5%')}}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
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

export default Login;