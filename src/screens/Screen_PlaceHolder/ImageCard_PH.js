import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet
 } from 'react-native';
import { white } from '../../assets/colors';
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ImageCard_PH() {
     return (
        //  <SkeletonPlaceholder>
             <View style={styles.main} >
                <View style={styles.top}>
                    <Ionicons name="share-social-sharp" size={20} color={white} />
                    <Ionicons style={{marginLeft:10}} name="heart" size={20} color={white} />
                </View>
                <View style={{position:"absolute", bottom:10,left:10, width:"100%"}} >  
                    <View style={styles.One} />
                    <View style={[styles.One, {width:"75%"}]} />
                    <View style={[styles.One, {width:"25%"}]} />
                </View>
             </View>
        //  </SkeletonPlaceholder>
     )
 }
 
 const styles = StyleSheet.create({
    main:{
        height:hp('27.5%'),
        width:'100%',
        marginBottom:hp('2%'),
        // justifyContent:'space-between',
        flexDirection:"column",
        backgroundColor:"#EEEEEE"
    },
    One:{
        width:"50%",
        height:hp("1.5%"),
        marginBottom:hp("0.3%"),
        // alignSelf:"flex-end",
        backgroundColor:white
    },  
    top:{
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:hp('2%'),
        alignItems:"center"
    },
 });