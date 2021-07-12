import React, { useEffect, useState } from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from '../../theme/ThemeContext';
import { lightGray } from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import { getItem } from '../../persist-storage';
import { toTitleCase } from '../../utils';

const options = [
    {
        id:1,
        text:"light",
    },
    {
        id:2,
        text:"dark",
    },
    {
        id:3,
        text:"system default",
    },
]


const Theme = () => {
    const [option,setOption] = useState();
    const {setScheme, isDark, colors} = useTheme()
    useEffect(()=>{
        getItem("theme").then((data)=>{
            if(data) setOption(data)
            else setOption("system default")
        })
    },[])
    const changeTheme = (theme) => () => {
        setOption(theme);
        setScheme(theme)
    }
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Theme Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {options.map(item=>
                <TouchableWithoutFeedback onPress={changeTheme(item.text)}>
                    <View style={styles.container}>
                        <Text style={[styles.text,{color:colors.text}]}>{toTitleCase(item.text)}</Text>
                        {
                            option==item.text &&
                                <Ionicons name="checkmark" size={18} color={colors.text} />
                        }
                        
                    </View>
                </TouchableWithoutFeedback>
            )}
        </Container>
    )
}
export default Theme;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:lightGray,
        minHeight:hp('6.5%'),
        padding:hp('1.5%'),
    },
    text:{
        fontFamily:"Regular",
        fontSize:hp('2%'),
    }
})