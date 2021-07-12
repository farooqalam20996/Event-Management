import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const SimpleHeader = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.heading}</Text>
        </View>
    )
}

export default SimpleHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:hp('2%')
    },
})