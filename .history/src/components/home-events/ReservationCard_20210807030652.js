import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, red, white } from '../../assets/colors';
import { Button } from '../common/Button';


const ReservationCard = ({}) => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.text}>32</Text>
                    <Text style={styles.subText}>Total Seats</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>16</Text>
                    <Text style={styles.subText}>Reserved Seats</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>30th</Text>
                    <Text style={styles.subText}>December</Text>
                </View>
            </View>
            <View style={[styles.row,{justifyContent:'center'}]}>
                <Text style={styles.price}>$120 per seat</Text>
                <Button
                    color={red}
                    text="Reserve Now"
                    style={{flex:2}}
                />
            </View>
        </View>
    )
}
export default ReservationCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('5%'),
        marginBottom:hp('5%'),
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    card:{
        height:hp('10%'),
        width:hp('15%'),
        padding:hp('2%'),
        borderRadius:hp('1%'),
        backgroundColor:primary,
        justifyContent:'space-between',
        alignItems:'center',
    },
    text:{
        color:white,
        fontSize:hp('3%'),
        fontFamily:"Bold",
    },
    subText:{
        color:white,
        // marginTop:'1%',
        fontSize:hp('2%'),
        fontFamily:"Regular",
        textAlign:"center",
        // height:hp('4%')
    },
    price:{
        flex:3,
        textAlign:'center',
        fontFamily:"Bold",
        fontSize:hp('3%'),
        backgroundColor:'red'
    }
})