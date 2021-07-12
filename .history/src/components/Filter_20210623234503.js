import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary } from '../assets/colors';


const Filter = ({filters}) => {
    return(
        <View style={styles.container}>
            {filters.map(filter=>
                <View style={styles.card}>
                    <Text style={styles.text}>{filter.text}</Text>
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
        borderRadius:10,
        backgroundColor:primary
    },
    text:{

    }
})