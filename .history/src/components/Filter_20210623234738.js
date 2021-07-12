import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from '../assets/colors';


const Filter = ({filters}) => {
    return(
        <View style={styles.container}>
            {filters.map(filter=>
                <View style={styles.card}>
                    <Text style={styles.text}>{filter.name}</Text>
                </View>
            )}
        </View>
    )
}
export default Filter;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:hp('1%'),
        paddingBottom:hp('1%'),
    },
    card:{
        minWidth:hp('8%'),
        padding:hp('1%'),
        marginRight:hp('1%'),
        alignItems:'center',
        borderRadius:15,
        backgroundColor:primary
    },
    text:{
        color:white,
        fontSize:hp('2%'),
        fontFamily:"Regular"
    }
})