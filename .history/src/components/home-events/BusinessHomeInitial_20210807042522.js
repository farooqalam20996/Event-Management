import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const BusinessHomeInitial = () => {
    return(
        <View style={styles.container}>
            <View>
                <Ionicons name="md-information-circle" size={40} color="#5EE2FF"/>
            </View>
        </View>

    )
}
export default BusinessHomeInitial;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})