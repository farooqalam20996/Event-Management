import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ImageCard = (props) => {
    const {image} = props;
    return(
        <ImageBackground borderRadius={hp('1%')} style={styles.container} source={image}>
            <View style={styles.top}>
                <Text>asasd</Text>
            </View>
            <View style={styles.bottom}>
                <Text>sasd</Text>
            </View>
        </ImageBackground>
    )
}
export default ImageCard;

const styles = StyleSheet.create({
    container:{
        height:hp('27.5%'),
        width:'100%',
        marginTop:hp('2%'),
        justifyContent:'space-between'
    },
    top:{
        flexDirection:'row',
        alignSelf:'flex-end'
    },
    bottom:{

    }
})