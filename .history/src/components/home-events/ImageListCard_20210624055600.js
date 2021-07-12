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
            <Image style={styles.mainImage} source={props.image}/>
            {/* <View style={{width:'100%'}}> */}
                <ScrollView horizontal style={styles.imageRow}>
                    <Image style={styles.image} source={props.image}/>
                    <Image style={styles.image} source={props.image}/>
                    <Image style={styles.image} source={props.image}/>
                    <Image style={styles.image} source={props.image}/>
                </ScrollView>
            {/* </View> */}
        </View>
    )
}  
export default ImageListCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('3.5%')
    },
    imageRow:{
        marginTop:hp('2%'),
    },
    mainImage:{
        height:hp('40%'),
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