import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { white } from '../../assets/colors';

const ImageCard = (props) => {
    const {image} = props;
    return(
        <ImageBackground borderRadius={hp('1%')} style={styles.container} source={image}>
            <TouchableWithoutFeedback onPress={()=>alert('asd')}>
                <>
                <View style={styles.top}>
                    <Ionicons name="share-social-sharp" size={20} color={white} />
                    <Ionicons style={{marginLeft:10}} name="heart" size={20} color={white} />
                </View>
                <View style={styles.bottom}>
                    <Text style={[styles.text,{fontFamily:'Bold', fontSize:hp('2.25%')}]}>Sant Martin Restaurant</Text>
                    <Text style={styles.text}>Chicken wings, Chicken BBQ....</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="location" size={16} color={white}  />
                        <Text style={[styles.text,{marginLeft:hp('1%')}]}>14th Street, NewYork, USA</Text>
                    </View>
                </View>
                </>
            </TouchableWithoutFeedback>
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
    },
    text:{
        fontSize:hp('2%'),
        color:white,
        marginTop:hp('0.75%')
    }
})