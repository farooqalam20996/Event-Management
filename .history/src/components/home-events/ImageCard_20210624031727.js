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
import { primary, white } from '../../assets/colors';

const ImageCard = (props) => {
    const {image, title, desc, loc, discount} = props;
    return(
        <TouchableWithoutFeedback onPress={()=>alert('asd')}>
            <ImageBackground borderRadius={hp('1%')} style={styles.container} source={image}>
                <View style={styles.top}>
                    <View style={styles.discount}>
                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="share-social-sharp" size={20} color={white} />
                        <Ionicons style={{marginLeft:10}} name="heart" size={20} color={white} />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={[styles.text,{fontFamily:'Bold', fontSize:hp('2.25%')}]}>{title}</Text>
                    <Text style={styles.text}>{desc}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="location" size={16} color={white}  />
                        <Text style={[styles.text,{marginLeft:hp('1%')}]}>{loc}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
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
        justifyContent:'space-between',
        padding:hp('2%')
    },
    bottom:{
        padding:hp('2%')
    },
    text:{
        fontSize:hp('2%'),
        color:white,
        marginTop:hp('0.75%')
    },
    discount:{
        backgroundColor:primary,
        height:hp('2%'),
        width:'10%',
    }
})