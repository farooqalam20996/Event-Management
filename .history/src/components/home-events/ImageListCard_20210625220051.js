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
            <ScrollView horizontal style={styles.imageRow}>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
                <Image style={styles.image} source={props.image}/>
            </ScrollView>
        </View>
    )
}  
export default ImageListCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('1.5%')
    },
    text:{
        marginBottom:hp('1.75%'),
        color:"#A2A2A2"
    },
    imageRow:{
        flexDirection:'row',
        marginTop:hp('1.5%'),
        width:'100%'
    },
    mainImage:{
        height:hp('25%'),
        width:'100%',
        borderRadius:hp('1%')
    },
    image:{
        height:hp('8%'),
        width:'23%',
        borderRadius:hp('1%'),
        marginRight:hp('1%')
    }
})