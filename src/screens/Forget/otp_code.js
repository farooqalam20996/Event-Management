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

class OTP_Code extends Component{

    constructor(props){
        super(props);
        this.state={
            code:'',
            Loader:false,
            Failed:false,
            error:"",
            VerifyEmail:this.props.route.params.Verify_Email
        }
    }

    componentDidMount(){
        that=this;
        console.log("Check Email ", this.state.VerifyEmail)
    }

    Check_Code = ()=> {
        Keyboard.dismiss()
       if(that.state.code == ""){
        that.toast.show("Kindly, First Fill The Field ", 1000)
       }
       else{
            that.setState({Loader: true})
            var data = new FormData();
            data.append('code', that.state.code);
            data.append('email', that.state.VerifyEmail);

            var config = {
            method: 'post',
            url: API+'jacobanderson_app/public/api/forget-password-code',
            data : data
            };

            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({Loader:false, Failed:false})
                    that.props.navigation.navigate("Change_Password", {VerifyEmail: that.state.VerifyEmail})
                    console.log(JSON.stringify(response.data));
                }
                else{
                    console.log(JSON.stringify(response.data));
                    that.setState({Loader:false, Failed:true})
                    that.toast.show(response.data.message, 1000)
                }
            })
            .catch(function (error) {
                console.log(error);
                that.setState({Loader:false, Failed:false})
                that.toast.show("Something Went Wrong", 1000)
            });
       }


        // if(this.state.Failed){
        //     this.toast.show("Failed Something", 1000)
        // }
        // else{
        //     Keyboard.dismiss()
        //     this.props.navigation.navigate("Change_Password")
        // }
    }
    
    render() {
        return (
            <View style={[styles.container,{backgroundColor:primary}]}>
                <Text style={styles.heading}>CODE</Text>
                <Text style={styles.Para}>
                    verification code is send on <Text style={[styles.Para, {color:white, fontFamily:"Bold", fontSize:hp("2.6%")}]} >{this.state.VerifyEmail}</Text>, add in below to get verification confirmation and change your Password, Thank You!
                </Text>
                <IconInput
                    placeholder="Enter Code"
                    value={this.state.code}
                    onChange={(text)=>this.setState({code: text})}
                    inputStyle={styles.CodeInput}
                    style={styles.mainInp}
                    iconColor={gray}
                    maxlength={4}
                    blur={false}
                    keyboard={"decimal-pad"}
                    onSubmitPress={this.Check_Code}
                />
                
                <Button
                    text="Check Code"
                    color={purple}
                    textColor={white}
                    onPress={this.Check_Code}
                    Loading={this.state.Loader}
                    disabled={this.state.Loader&&true}
                />

                <Toast
                     ref={(toast) => this.toast = toast}
                    style={{backgroundColor:"black", width:"96%", zIndex:1}}
                    position="bottom"
                    positionValue={hp("-2%")}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                    
                />

            </View>
        );
    }
}

export default OTP_Code;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        alignItems:'center',
        justifyContent:"center",
        padding:hp('1%')
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Bold",
        color:white,
        alignSelf:"center",
        marginTop:hp('1%'),
        letterSpacing:2,

    },
    Para:{
        fontSize:hp('2%'),
        fontFamily:"Regular",
        color:white,
        marginTop:hp('2%'),
        textAlign:'left',
        width:"85%"
    },
    mainInp:{
        backgroundColor:primary,
        marginTop:hp("3%")
    },
    CodeInput:{
        borderBottomWidth:hp("0.5%"),
        borderBottomColor:white,
        fontSize:hp('3%'),
        fontFamily:"Bold",
        color:white,
        letterSpacing:hp("2%"),
        textAlign:'center'
    }
})
