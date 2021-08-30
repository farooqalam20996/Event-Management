import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from '../../../components/common/Button';
import IconInput from '../../../components/common/IconInput';
import { gray, primary, purple, white } from '../../../assets/colors';

const BusinessSignup = ({onSignupPress}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    return (
        <ScrollView>
            <IconInput
                icon="mail"
                placeholder="Email Address"
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    
})

export default BusinessSignup;