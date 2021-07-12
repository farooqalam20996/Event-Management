import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from '../assets/colors';


const Filter = ({filters}) => {
    return(
        <ScrollView
            // contentContainerStyle={styles.container}
            horizontal
        >
            {filters.map(filter=>
                <View style={styles.card}>
                    <Text style={styles.text}>{filter.name}</Text>
                </View>
            )}
        </ScrollView>
    )
}
export default Filter;
const styles = StyleSheet.create({
    container:{
        paddingTop:hp('1%'),
        paddingBottom:hp('1%'),
        height:
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