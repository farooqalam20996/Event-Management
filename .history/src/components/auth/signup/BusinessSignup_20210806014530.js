import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from '../../../components/common/Button';
import IconInput from '../../../components/common/IconInput';
import { gray, primary, purple, white } from '../../../assets/colors';

const BusinessSignup = ({onSignupPress}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <>
            <IconInput
                placeholder="Your Business name"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <Picker
                style={styles.picker}
                itemStyle={{backgroundColor:'red'}}
                enabled
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Button
                text="SIGN UP"
                color={purple}
                textColor={white}
                onPress={onSignupPress}
            />
            
        </>
    )
}

const styles = StyleSheet.create({
    picker:{
        backgroundColor:'red',
        height:150,
        width:200,
        color:white
    }    
})

export default BusinessSignup;