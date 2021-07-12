import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, gray, primary, white } from '../../assets/colors';
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
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
            />
            <IconInput
                icon="key"
                value={password}
                onChange={(text)=>setPassword(text)}
                iconColor={gray}
            />
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
        fontSize:hp('3.8%'),
        fontFamily:"Light",
        color:white,
        marginTop:hp('4.5%')
    }
})

export default Login;