import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, gray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import IconInput from '../../components/common/IconInput';
import { useTheme } from '../../theme/ThemeContext'
import UserSignup from '../../components/auth/signup/UserSignup';
import BusinessSignup from '../../components/auth/signup/BusinessSignup';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Individual_SignUp } from '../../redux/action/Ind_SIgnUpAction';

const Signup = () => {
    const [switchTab,setSwitchTab] = useState(true); // false for Business
    const navigation = useNavigation()
    const {colors, isDark} = useTheme();

    const toggleTab = () => {
        setSwitchTab(!switchTab);
    }
    const onSignupPress = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView 
            style={{backgroundColor:isDark ? black: primary}} 
            contentContainerStyle={[styles.container,{backgroundColor:isDark ? black: primary}]}
        >
            <Image 
                source={require("../../assets/images/logo.png")}
                style={{width:hp("15%"), height:hp("15%")}}
            />
            <Text style={styles.heading}>Sign up</Text>
            <View style={styles.tabContainer}>
                <TouchableWithoutFeedback onPress={toggleTab} style={styles.tab}>
                    <View style={[styles.tab,switchTab && {backgroundColor: purple}]}>
                        <Text style={styles.tabText}>Individual</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={toggleTab}>
                    <View style={[styles.tab,!switchTab && {backgroundColor: purple}]}>
                        <Text style={styles.tabText}>Business</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {switchTab
                ? <UserSignup navigation={navigation} />
                : <BusinessSignup />
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignItems:'center',
        paddingTop:hp('10%')
    },
    logo:{
        color: white,
        fontFamily:"Bold",
        fontSize: hp('5%'),
        letterSpacing:1
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Light",
        color:white,
        marginTop:hp('5%')
    },
    tabContainer:{
        marginTop:hp('2%'),
        height:hp('5%'),
        alignItems:'center',
        width:'80%',
        flexDirection:'row',
        borderWidth:1.5,
        borderColor:purple,
        borderRadius:hp('1%')
    },
    tab:{
        flex:1,
        height:hp('5%'),
        justifyContent:'center',
        alignItems:'center',
    },
    tabText:{
        fontFamily:"Regular",
        fontSize:hp('2.25%'),
        color:white
    }
    
})

export default Signup;