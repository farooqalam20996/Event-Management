import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { primary } from '../../assets/colors';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>This is login page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Login;