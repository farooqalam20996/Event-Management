import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { lightGray, primary } from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';
import { manageDate } from '../../utils';

const MessageThread = ({id, img, name, read, readBy, msg, lastMessageBy, lastMessageTime, time, onPress}) => {
    const {colors} = useTheme();
    const getDate = () => {
        const msgDate = manageDate(lastMessageTime);
        const today = manageDate(new Date().getTime());
        if(msgDate.split(",")[0] == today.split(",")[0]){
            return msgDate.split(",")[1]
        }else{
            return msgDate.split(",")[0]
        }
    }
    if(!msg){
        return null;
    }
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: img}}/>
                <View style={styles.column}>
                    <Text style={[styles.name,{color:colors.heading}]}>{name}</Text>
                    <View style={{flexDirection:"row"}}>
                        {
                            lastMessageBy == id && 
                            (
                                read 
                                ?<Ionicons style={{marginRight:2}} name="md-checkmark" size={14}  color="black" />
                                :<Ionicons style={{marginRight:2}} name="md-checkmark" size={14} color="black" />
                            )
                        }
                        <Text style={[styles.msg,{color:colors.text}]}>{msg}</Text>
                    </View>
                </View>
                <View style={{ justifyContent:"space-between", paddingVertical:hp('2%') }}>
                    <Text style={{ fontSize:10 , color:"black" , fontFamily:"Regular"  }} > {getDate()} </Text>
                    <View style={styles.unreadIcon}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default MessageThread;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:lightGray,
        padding:hp('1.5%'),
    },
    image:{
        flex:1,
        height:hp('8%'),
        width:hp('7%'),
        borderRadius:hp('1%')
    },
    column:{
        flex:4,
        justifyContent:'space-evenly',
        marginLeft:hp('1.5%')
    },
    name:{
        fontFamily:"Bold",
        fontSize:hp('2.25%'),
        color:primary,
    },
    msg:{
        fontFamily:"Regular",
        fontSize:hp('2%'),
    },
    unreadIcon:{
        alignSelf:'center',
        height:hp('1.5%'),
        width:hp('1.5%'),
        borderRadius:100,
        backgroundColor:primary
    }
})