import React from 'react';
import {
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = (props) => {
    return(
        <View style={{padding:hp('2.5%')}}>
            {props.children}
        </View>
    )
}