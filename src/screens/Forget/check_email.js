// import React, {useState} from 'react';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, gray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import IconInput from '../../components/common/IconInput';
import Spinner from "react-native-loading-spinner-overlay";
import Toast from "react-native-easy-toast";
import { API } from '../../redux/MainURL';

var axios = require('axios');
var FormData = require('form-data');
var that;

class Check_Email extends Component{

    constructor(props){
        super(props);
        this.state={
            Check_Email:'',
            Loader:false,
            Failed:false,
            error:""
        }
    }

    componentDidMount(){
        that = this
    }

    PressEmailConfirmation = ()=> {
        // that.props.navigation.navigate("Change_Password")
        Keyboard.dismiss()
        if(that.state.Check_Email == ""){
            that.toast.show("Kindly, First Fill The Field ", 1000)
        }
        else{
            that.setState({Loader:true})
            var data = new FormData();
            data.append('email', that.state.Check_Email);
            
            var config = {
            method: 'post',
            url: API+'jacobanderson_app/public/api/forget-password', 
            data : data
            };
            // console.log(config)

            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({Loader:false, Failed:false})
                    console.log(JSON.stringify(response.data.data.code));
                    that.props.navigation.navigate("OTP_CODE", {Verify_Email: that.state.Check_Email})
                }
                else{
                    that.setState({Loader:false, Failed:true, error:response.data.message})
                    that.toast.show(response.data.message, 1000)
                    console.log(JSON.stringify(response.data.data));
                }
            })
            .catch(function (error) {
                that.setState({Loader:false, Failed:true, error:"Something Went Wrong"})
                that.toast.show("Something Went Wrong", 1000)
                console.log("iserror ",error);
            });
        }
    }
    
    render() {
        return (
            <View style={[styles.container,{backgroundColor:primary}]}>
                {/* <Text style={styles.logo}>LOGO</Text> */}
                <Text style={styles.heading}>Email Confirmation</Text>
                <IconInput
                    icon="mail"
                    placeholder="Confirmation Email"
                    value={this.state.Check_Email}
                    onChange={(text)=>this.setState({Check_Email: text})}
                    iconColor={gray}
                    blur={false}
                    keyboard={"email-address"}
                    onSubmitPress={this.PressEmailConfirmation}
                    // AutoFocus={true}
                />
                
                <Button
                    text={"Confirm Email"}
                    color={purple}
                    textColor={white}
                    onPress={this.PressEmailConfirmation}
                    Loading={this.state.Loader}
                    disabled={this.state.Loader&&true}
                />

                {/* <Spinner
                    visible={this.state.Loader}
                    textContent={"Loading..."}
                    textStyle={{fontFamily:"Bold", fontSize:hp("2.5%"), color:"white"}}
                /> */}

                <Toast
                    ref={(toast) => this.toast = toast}
                    style={{backgroundColor:"black", width:"96%", zIndex:1}}
                    position="bottom"
                    positionValue={hp("-1%")}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                    
                />

            </View>
        );
    }
}

export default Check_Email;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        alignItems:'center',
        justifyContent:"center",
        // paddingTop:hp('20%')
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Light",
        color:white,
        marginTop:hp('5%')
    },
})
