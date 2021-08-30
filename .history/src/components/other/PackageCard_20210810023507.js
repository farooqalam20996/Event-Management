import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';

 const PackageCard = ({plan, amount,color, onPress}) => {
    return(
        <View style={[styles.container,{backgroundColor:color}]}>
            <Text style={styles.plan}>{plan}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.amount}>${amount}<Text style={styles.text}> / Month</Text></Text>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={[styles.text,{color}]}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
 }
 export default PackageCard;

 const styles = StyleSheet.create({
     container:{
         marginVertical:hp('1%'),
         height:hp('20%'),
         borderRadius:hp('1%'),
         paddingHorizontal:hp('2%'),
         paddingVertical:hp('2.5%'),
         justifyContent:'space-between',
         borderRadius:hp('2%')
     },
     plan:{
        fontSize:hp('2.5%'),
        fontFamily:"Regular",
        color:white,
     },
     amount:{
        fontSize:hp('6%'),
        fontFamily:"Bold",
        color:white
     },
     text:{
        fontSize:hp('2%'),
        fontFamily:"Regular",
     },
     button:{
        height:hp('4%'),
        alignSelf:'flex-end',
        backgroundColor:white,
        paddingHorizontal:hp('2%'),
        paddingVertical:hp('1%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp('1%'),
        marginLeft:hp('4%'),
     }
 })