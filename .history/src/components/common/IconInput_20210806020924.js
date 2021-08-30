import React, {useRef, useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, darkGray, gray } from '../../assets/colors';

const IconInput = ({style, inputStyle, phone, onChange, value, iconColor, icon, placeholder, inputRef, onSubmitPress, blur,pass, keyboard}) => {
    const input = useRef(null);
    const [visible, setVisible]  = useState(true)
    return(
        <View style={[styles.inputRow,style]}>
            {phone &&
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image style={styles.imageStyle} source={require('../../assets/images/flag.png')} />
                    <TextInput
                        style={[styles.input,{flex:0, }]}
                        editable={false}
                        placeholder={"  +1"}
                        placeholderTextColor={black}
                    />
                </View>
            }
            <TextInput
                blurOnSubmit={blur}
                onChangeText={onChange}
                value={value}
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
                placeholderTextColor={darkGray}
                ref={inputRef}
                onSubmitEditing={onSubmitPress}
                secureTextEntry={pass ? visible : !visible}
                keyboardType={keyboard}
            />
            {pass
                ?
                value == ""
                    ?<Ionicons name={icon} size={22} color={iconColor} />
                    :<Ionicons onPress={()=>setVisible(!visible)} name={visible ? 'eye' : 'eye-off'} size={22} color={iconColor} />
                :
                <Ionicons name={icon} size={22} color={iconColor} />
            }
        </View>
    )
}

export default IconInput

const styles = StyleSheet.create({
    inputRow:{
        flexDirection:"row",
        alignItems:'center',
        padding:hp('1%'),
        width:'80%',
        backgroundColor:'white',
        borderRadius:hp('1%'),
        marginTop:hp('2.5%')
    },
    input:{
        flex:1,
        fontSize:hp('2.25%'),
    },
    imageStyle:{
        height:hp('3%'),
        width:hp('4%'),
    }
})