import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ImageListCard = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <Image style={styles.mainImage} source={props.image}/>
            <View style={styles.imageRow}>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
            </View>
        </View>
    )
}  
export default ImageListCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('1%')
    },
    text:{
        marginBottom:hp('1%'),
    },
    imageRow:{
        flexDirection:'row',
        marginTop:hp('1.5%'),
        width:'100%'
    },
    mainImage:{
        height:hp('30%'),
        width:'100%',
        borderRadius:hp('1%')
    },
    image:{
        height:hp('10%'),
        width:'25%',
        borderRadius:hp('1%'),
        marginRight:hp('1%')
    }
})