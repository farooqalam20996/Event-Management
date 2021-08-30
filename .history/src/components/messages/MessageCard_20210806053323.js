import React from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, lightGray, primary } from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import {useTheme} from '../../theme/ThemeContext'; 

const MessageCard = ({}) => {
    const {colors} = useTheme()
    return(
        <View style={styles.container}>
            
        </View>
    )
}
export default MessageCard;

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