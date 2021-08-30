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
                placeholder="Address Line 2"
                value={email}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <View style={styles.row}>
                <IconInput
                    style={{flex:5}}
                    placeholder="Address Line 1"
                    value={email}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
                <TouchableOpacity style={[constStyle, styles.btn]}>
                    <Ionicons size={30} color={primary} name="location-sharp"/>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.row}>
                <Image/>
            </View> */}
            <Button
                text="SIGN UP"
                color={purple}
                style={{marginBottom:hp('5%')}}
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
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'80%'
    },
    btn:{
        backgroundColor:white,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:hp('6.5%'),
        marginLeft:hp('1%')
    }

})

export default BusinessSignup;