import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
import Modal from "react-native-modal";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from '../../assets/colors';
import { useTheme } from '../../theme/ThemeContext';


 function ModalAppearance(props) {
    // const [ShowModal, setShowModal]=useState(props.IsModal);
    const {colors} =useTheme();
     return(
        <>
            <Modal
                isVisible={props.OpenModal}
                onBackButtonPress={props.CloseModal}
                onBackdropPress={props.CloseModal}
                animationIn={"slideInUp"}
                animationInTiming={400}
                animationOut={"slideOutDown"}
                animationOutTiming={300}
                style={{flex:1, justifyContent:"flex-end", margin:0}}
                coverScreen={true}
                avoidKeyboard
                statusBarTranslucent
                backdropTransitionOutTiming={0}
            >
                <View style={[styles.Container, {backgroundColor:colors.background}]} >
                   {props.children}
                </View>
            </Modal>
        </>
     )
 }

export default ModalAppearance;

 const styles = StyleSheet.create({
    Container:{
        // top:hp("3%"),
        width:"100%",
        paddingHorizontal:hp("2%"),
        alignSelf:"center",
        height:hp("40%"),
        backgroundColor:white,
        // borderTopColor:primary,
        // borderTopWidth:hp("0.3%"),
        borderTopLeftRadius:hp("3%"),
        borderTopRightRadius:hp("3%"),
    }
 });