import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from '../../../components/common/Button';
import IconInput from '../../../components/common/IconInput';
import { useTheme } from '../../../theme/ThemeContext'
import { gray, primary, purple, white } from '../../../assets/colors';

const UserSignup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const navigation = useNavigation()
    const {colors} = useTheme();

    const onSignupPress = () => {
        navigation.navigate('Login')
    }
    return (
        <View>
            <IconInput
                icon="mail"
                placeholder="Emailasd Address"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <IconInput
                icon="key"
                pass
                placeholder="Password"
                value={password}
                onChange={(text)=>setPassword(text)}
                iconColor={gray}
                inputRef={input => inputRef = input}
                onSubmitPress={()=>cPassInputRef.focus()}
                blur={false}
            />
             <IconInput
                icon="key"
                pass
                placeholder="Confirm Password"
                value={cPassword}
                onChange={(text)=>setCPassword(text)}
                iconColor={gray}
                inputRef={input => cPassInputRef = input}
            />
            <Button
                text="SIGN UP"
                color={purple}
                textColor={white}
                onPress={onSignupPress}
            />
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

export default UserSignup;