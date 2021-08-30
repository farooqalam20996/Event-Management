import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary } from '../../assets/colors';


const ReservationCard = ({}) => {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>32</Text>
                <Text>Total Seats</Text>
            </View>
        </View>
    )
}
export default ReservationCard;

const styles = StyleSheet.create({
    container:{
        padding:hp('5%')
    },
    card:{
        width:"auto",
        padding:hp('2%'),
        borderRadius:hp('1%'),
        backgroundColor:primary
    }
})