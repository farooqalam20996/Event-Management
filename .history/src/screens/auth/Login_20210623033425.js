import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, gray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import { IconInput } from '../../components/common/IconInput';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>LOGO</Text>
            <Text style={styles.heading}>Sign in</Text>
            <IconInput
                icon="mail"
                placeholder="Enter Email Address"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
            />
            <IconInput
                icon="key"
                placeholder="Enter Password"
                value={password}
                onChange={(text)=>setPassword(text)}
                iconColor={gray}
            />
            <Button
                text="SIGN IN"
                color={purple}
                textColor={white}
            />
            <View style={styles.lineContainer}>
                <View style={styles.line}/>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line}/>
            </View>
            
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
        letterSpacing:1
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Light",
        color:white,
        marginTop:hp('4.5%')
    },
    lineContainer:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        backgroundColor:white,
        height:hp('0.1%'),
        width:'40%',
    },
    orText:{
        color:white,
        marginLeft:hp('5%')
    }
})

export default Login;