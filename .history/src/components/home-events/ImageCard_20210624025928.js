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
                <Ionicons name="share-social-sharp" size={20} color={white} />
                <Ionicons style={{marginLeft:10}} name="heart" size={20} color={white} />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>Sant Martin Restaurant</Text>
                <Text style={styles.text}>Chicken wings, Chicken BBQ....</Text>
                <View style={{flexDirection:'row'}}>
                    <Ionicons name="location" size={20} color={white}  />
                    <Text style={styles.text}>14th Street, NewYork, USA</Text>
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
        alignSelf:'flex-end',
        padding:hp('2%')
    },
    bottom:{
        padding:hp('2%')
    }
})