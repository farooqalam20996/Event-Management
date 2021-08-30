import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';

 const PackageCard = ({plan, amount}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.plan}>{plan}</Text>
            <View>
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
         padding:hp('1%'),
     },
     plan:{
        fontSize:hp('3%'),
        fontFamily:"Bold",
     },
     amount:{
        fontSize:hp('4%'),
        fontFamily:"Bold",
     },
     text:{
        fontSize:hp('2%'),
        fontFamily:"Regular",
     },
     button:{
        backgroundColor:white,
        paddingHorizontal:hp('2%'),
        paddingVertical:hp('1%'),
        justifyContent:'center',
        alignItems:'center',
     }
 })