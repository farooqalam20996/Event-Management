import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ImageListCard = (props) => {
    return(
        <View>
            <Image style={styles.mainImage} source={props.image}/>
            <View>
                <Image source={props.image}/>
                <Image source={props.image}/>
                <Image source={props.image}/>
            </View>
        </View>
    )
}  
export default ImageListCard;

const styles = StyleSheet.create({
    container:{

    },
    mainImage:{
        height:hp('40%'),
        width:'100%',
    },
    image:{

    }
})