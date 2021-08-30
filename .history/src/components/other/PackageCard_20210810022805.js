import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';

 const PackageCard = ({plan, amount,color}) => {
    return(
        <View style={[styles.container,{backgroundColor:color}]}>
            <Text style={styles.plan}>{plan}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.amount}$>{amount}<Text style={styles.text}>/ Month</Text></Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
 }
 export default PackageCard;

 const styles = StyleSheet.create({
     container:{
         height:hp('20%'),
         borderRadius:hp('1%'),
         paddingHorizontal:hp('1%'),
         paddingVertical:hp('2.5%'),
         justifyContent:'space-between',
         borderRadius:hp('2%')
     },
     plan:{
        fontSize:hp('3%'),
        fontFamily:"Bold",
        color:white
     },
     amount:{
        fontSize:hp('6%'),
        fontFamily:"Bold",
     },
     text:{
        fontSize:hp('2%'),
        fontFamily:"Regular",
     },
     button:{
        height:hp('5%'),
        alignSelf:'flex-end',
        backgroundColor:white,
        paddingHorizontal:hp('2%'),
        paddingVertical:hp('1%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp('1%')
     }
 })