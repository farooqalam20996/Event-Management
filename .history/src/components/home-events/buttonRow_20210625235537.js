import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { primary, white } from '../../assets/colors';

const ButtonRow = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="call" size={24} color={white} />
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Ionicons />
                <Text></Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonRow;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('1%'),
        flexDirection:'row',
    },
    button:{
        flex:1,
        flexDirection:'row',
        height:hp('3%'),
        backgroundColor:primary,
    }
    
})