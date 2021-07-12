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

const options = [
    {
        id:1,
        text:"Light",
    },
    {
        id:2,
        text:"Dark",
    },
    {
        id:3,
        text:"System Default",
    },
]


const Theme = () => {
    const [option,setOption] = useState();
    const {setScheme, isDark, colors} = useTheme()
    useEffect(()=>{
        getItem("theme").then(data=>alert(data))
    },[])
    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Theme Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {options.map(item=>
                <TouchableWithoutFeedback onPress={()=>setOption(item.text)}>
                    <View style={styles.container}>
                        <Text style={[styles.text,{color:colors.text}]}>{item.text}</Text>
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