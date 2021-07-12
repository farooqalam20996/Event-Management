import React, {useRef, useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const IconInput = ({onChange, value, iconColor, icon, placeholder, inputRef, onSubmitPress, blur,pass, keyboard}) => {
    const input = useRef(null);
    const [visible, setVisible]  = useState(true)
    return(
        <View style={styles.inputRow}>
            <TextInput
                blurOnSubmit={blur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder={placeholder}
                ref={inputRef}
                onSubmitEditing={onSubmitPress}
                secureTextEntry={visible}
                keyboardType={"email-address"}
            />
            {pass
                ?
                value == ""
                    ?<Ionicons style={styles.icon} name={icon} size={24} color={iconColor} />
                    :<Ionicons onPress={()=>setVisible(!visible)} style={styles.icon} name={visible ? 'eye' : 'eye-off'} size={24} color={iconColor} />
                :
                <Ionicons style={styles.icon} name={icon} size={24} color={iconColor} />
            }
        </View>
    )
}

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
    icon:{

    }
})