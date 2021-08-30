import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { lightGray } from '../../assets/colors';

const MessageCard = ({onPress}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/images/user.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.name}>Robin Davidson</Text>
                    <Text style={styles.name}>Via Event: Rave Party</Text>
                </View>
                <View style={styles.unreadIcon}/>
            </View>
        </TouchableWithoutFeedback>
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
        padding:hp('1.5%'),
    },
    image:{
        height:hp('7%'),
        width:hp('7%'),
        borderRadius:hp('1%')
    },
    column:{
        flex:1,
        backgroundColor:'red'
    },
    name:{
        fontFamily:"Regular",
        fontSize:hp('2%'),
    },
    msg:{
        fontFamily:"Regular",
        fontSize:hp('2%'),
    }
})