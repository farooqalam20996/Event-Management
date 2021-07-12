import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { white } from '../../assets/colors';

const ImageCard = (props) => {
    const {image} = props;
    return(
        <ImageBackground borderRadius={hp('1%')} style={styles.container} source={image}>
            <View style={styles.top}>
                <Ionicons name="heart" size={24} color={white} />
                <Ionicons name="share-social-sharp" size={24} color={white} />
            </View>
            <View style={styles.bottom}>
                <Text>Sant Martin Restaurant</Text>
                <Text>Chicken wings, Chicken BBQ....</Text>
                <View style={{flexDirection:'row'}}>
                    <Ionicons/>
                    <Text>14th Street, NewYork, USA</Text>
                </View>
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