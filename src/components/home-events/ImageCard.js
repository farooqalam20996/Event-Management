import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
    StyleSheet,
    Share
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { black, purple, white } from '../../assets/colors';
import { API } from '../../redux/MainURL';
import { Onshare } from '../common/Share';
import ImageCard_PH from '../../screens/Screen_PlaceHolder/ImageCard_PH';
var axios = require('axios');

const ImageCard = ({onPress, style, image, title, desc, loc, Favorite, discount, date, isBusiness, UserID, EventID, BusinessID, onLikePress, isLike, isEvent}) => {

    const[load, setLoad]=useState(true)

    const renderBadge = () => {
        if(discount || date ){
            if(discount){
                return(
                    <View style={styles.discount}>
                        <Text style={{color:white, fontSize:hp('2.2%'), fontFamily:"Regular"}}>{discount}</Text>
                    </View>
                )
            }else if(date){
                return(
                    <View style={styles.date}>
                        <Ionicons name="calendar" size={20} color={white} />
                        <Text style={{color:white, fontSize:hp('2%'), marginLeft:5, fontFamily:"Regular"}}>{date}</Text>
                    </View>
                )
            }
            return
        }
    }
 
    return(
        <TouchableWithoutFeedback onPress={onPress} >
            <ImageBackground borderRadius={hp('1%')} style={[styles.container,style]} source={image} onLoad={()=> setLoad(false)} >
                {
                    load && <ImageCard_PH />
                }
                <View style={discount || date ? styles.top : [styles.top,{justifyContent:'flex-end'}]}>
                    {renderBadge()}
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="share-social-sharp" size={20} color={white} onPress={()=> Onshare(title, desc, API)} />
                        {
                            isBusiness?
                            <Ionicons style={{marginLeft:10}} name="heart" size={20} color={isLike?"red":white} onPress={onLikePress} />
                            :
                            (
                                !isEvent&&
                                    <Ionicons style={{marginLeft:10}} name="heart" size={20} color={isLike?"red":white} onPress={onLikePress} />
                            )
                        }
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={[styles.text,{fontFamily:'Bold', fontSize:hp('2.25%')}]}>{title}</Text>
                    <Text style={styles.text}>{desc}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="location" size={16} color={white}  />
                        <Text style={[styles.text,{marginLeft:hp('1%')}]}>{loc}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
            
    )
}
export default ImageCard;

const styles = StyleSheet.create({
    container:{
        height:hp('27.5%'),
        width:'100%',
        marginBottom:hp('2%'),
        justifyContent:'space-between'
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:hp('2%')
    },
    bottom:{
        padding:hp('2%')
    },
    text:{
        fontSize:hp('2%'),
        color:white,
        marginTop:hp('0.75%'),
        fontFamily:"Regular"
    },
    discount:{
        backgroundColor:'green',
        marginLeft:hp('-2%'),
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        padding:hp('0.5%'),
        paddingRight:hp('1%'),
    },
    date:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:purple,
        padding:hp('0.5%'),
        borderRadius:5
    }
})