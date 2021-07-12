import React, {useRef, useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const IconInput = ({style, inputStyle, onChange, value, iconColor, icon, placeholder, inputRef, onSubmitPress, blur,pass, keyboard}) => {
    const input = useRef(null);
    const [visible, setVisible]  = useState(true)
    return(
        <View style={[styles.inputRow,style]}>
            <TextInput
                blurOnSubmit={blur}
                onChangeText={onChange}
                value={value}
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
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
        padding:hp('1%'),
        width:'80%',
        backgroundColor:'white',
        borderRadius:hp('1%'),
        marginTop:hp('2.5%')
    },
    input:{
        flex:1,
        fontSize:hp('2.25%')
    },
})