import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from '../../../components/common/Button';
import IconInput from '../../../components/common/IconInput';
import { gray, primary, purple, white } from '../../../assets/colors';

const constStyle = {
    width:'80%',
    height:hp('6%'),
    backgroundColor:'white',
    borderRadius:hp('1%'),
    marginTop:hp('2.5%')
}

const BusinessSignup = ({onSignupPress}) => {

    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState("")
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
            <View style={constStyle}>
                <Picker
                    style={{width:'100%',height:hp('6%')}}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }
                >
                    <Picker.Item label="Select Category" value="Select Category" />
                    <Picker.Item label="Restaurant" value="Restaurant" />
                    <Picker.Item label="Event" value="Event" />
                </Picker>
            </View>
            <TextInput
                style={[constStyle, styles.desc]}
                value={desc}
                multiline
                onChangeText={(text)=>setDesc(text)}
                placeholder="Enter Description"
            />
            <IconInput
                phone
                placeholder="Phone Number"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <IconInput
                placeholder="Address Line 1"
                icon="location-outline"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <View>
                <IconInput
                    placeholder="Address Line 1"
                    icon="location-outline"
                    value={email}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
                <TouchableOpacity>
                    <Ionicons name="location-sharp"/>
                </TouchableOpacity>
            </View>
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
       
    },
    desc:{
        height:hp('12%'),
        paddingHorizontal:hp('1%'),
    },

})

export default BusinessSignup;