import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Switch
 } from 'react-native';
import Toast from 'react-native-easy-toast';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black, primary } from '../../../assets/colors';
import { Container } from '../../../components/common/Container';
import Header from '../../../components/common/Header';
import {Ionicons} from "@expo/vector-icons";
import {useTheme} from "../../../theme/ThemeContext";

function Account_Setting(params) {
    let toast;
    const [mute, SetMute]= useState(false);

    const {colors} = useTheme();

    const Switch_Now = () => {
        SetMute(!mute)
        if(!mute){
            toast.show("Notification muted", 1000)
        }
        else{
            toast.show("Notification unMuted", 1000)
        }
    }

    return(
        <Container>
            <Header
                backIcon
                heading={"Notification Setting"}
            />
            <View style={styles.main} >
                <Text style={[styles.Txt, {color:colors.text}]} >
                    Notification is {mute?"Muted":"not Mute"} 
                </Text>
                <Switch 
                    value={mute}
                    onValueChange={Switch_Now}
                    thumbColor={mute?primary:"gray"}
                    trackColor={{false:'lightgray', true:'lightgray'}}
                />
                <Toast
                    ref={ref =>(toast = ref)}
                    style={{backgroundColor:black, width:"100%", zIndex:1}}
                    position="bottom"
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8} 
                    textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                />
            </View>
        </Container>
    )
}

export default Account_Setting;

const styles = StyleSheet.create({
    main:{
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        padding:hp("1%")
    },
    Txt:{
        fontSize:hp("2.2%"),
        fontFamily:"Regular",
        color:black
    }
});