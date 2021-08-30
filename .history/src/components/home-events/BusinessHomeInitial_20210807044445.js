import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { black, darkGray, gray } from '../../assets/colors';

const Button = ({text, image}) => (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)
const BusinessHomeInitial = () => {
    return(
        <View style={styles.container}>
            <View>
                <Ionicons name="md-information-circle" size={40} color="#5EE2FF"/>
                <Text style={styles.heading}>Get started</Text>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                <Button
                    text={"Create Event"}
                    image={require('../../assets/images/cups.png')}
                />
                <Button
                    text={"Create Event"}
                    image={require('../../assets/images/briefcase.png')}
                />
            </View>
        </View>

    )
}
export default BusinessHomeInitial;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        flexDirection:'row',
        padding:hp('3%'),
        backgroundColor:gray,
        borderRadius:hp('1%'),
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    image:{
        // height:hp('10%'),
        // width:wp('22%'),
    },
    heading:{
        fontSize:hp('3%'),
        fontFamily:"Bold",
        color:'#707070'
    },
    text:{
        color:black,
    }
})