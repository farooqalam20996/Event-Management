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
        <Text style={[styles.heading,{color:'#004C5D'}]}>{text}</Text>
    </TouchableOpacity>
)
const BusinessHomeInitial = () => {
    return(
        <View style={styles.container}>
            <View>
                <Ionicons name="md-information-circle" size={40} color="#5EE2FF"/>
                <Text style={[styles.heading,{marginTop:hp('2%')}]}>Get started</Text>
                <Text style={[styles.text,{marginVertical:hp('2%')}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                <Button
                    text={"Create Event"}
                    image={require('../../assets/images/cups.png')}
                />
                <Button
                    text={"Business Page"}
                    image={require('../../assets/images/briefcase.png')}
                />
            </View>
            <View style={{marginBottom:hp('5%')}}/>
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
        backgroundColor:'#ECECEC',
        borderRadius:hp('2%'),
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:hp('2%')
    },
    image:{
        height:hp('8%'),
        width:wp('12%'),
    },
    heading:{
        fontSize:hp('3%'),
        fontFamily:"Bold",
        color:'#707070'
    },
    text:{
        color:black,
        fontSize:hp('2.25%'),
        fontFamily:"Regular",
    }
})