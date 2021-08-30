import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { lightGray } from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';


const SimpleHeader = ({backIcon,heading, icon1, icon1Press, icon2, icon2Press, style}) => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const len = heading.length;
    return(
        <View style={[styles.container,style]}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                {backIcon
                    &&
                    <Ionicons
                        name={'arrow-back'}
                        size={22}
                        color={colors.text}
                        onPress={()=>navigation.goBack()}
                        style={{marginRight:hp('1%')}}
                    /> 
                }
                <Text style={[styles.heading,{color:colors.heading}]}>{len > 22 ? heading.slice(0,22)+"..." : heading}</Text>
            </View>
           
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                {icon1 &&
                    <Ionicons
                        name={icon1}
                        size={22}
                        color={colors.text}
                        onPress={icon1Press}
                        style={{marginLeft:hp('1%')}}
                    />
                }
                {icon2 &&
                    <Ionicons
                        name={icon2}
                        size={24}
                        color={'red'}
                        onPress={icon2Press}
                        style={{marginLeft:hp('1.5%')}}
                    />
                }
            </View>
        </View>
    )
}

export default SimpleHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:hp('2%'),
        marginBottom:hp('3%')
    },
    heading:{
        fontSize:hp('3%'),
        fontFamily:"Bold",
        color:lightGray
    }
})