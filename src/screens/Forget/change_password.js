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

class Change_Password extends Component{

    constructor(props){
        super(props);
        this.state={
            Password:'',
            C_Password:'',
            Loader:false,
            Failed:false,
            Success:false,
            error:"",
            VerifyEmail:this.props.route.params.VerifyEmail
        }
    }

    componentDidMount(){
        that=this;
        console.log("Check Email ", this.state.VerifyEmail)
    }

    Change_Password = ()=> {
        Keyboard.dismiss()
        if(that.state.Password =="" || that.state.C_Password == ""){
            that.toast.show("Kindly, Fill The Field First", 1000)
        }
        else if(that.state.Password !== that.state.C_Password ){
            that.toast.show("Passwords are not Same", 1000)
        }
        else{
            that.setState({Loader: true})
            var data = new FormData();
            data.append('email', that.state.VerifyEmail);
            data.append('password', that.state.Password);

            var config = {
            method: 'post',
            url: API+'jacobanderson_app/public/api/reset-password',
            data : data
            };

            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({Loader:false, Failed:false, Success:true})
                    that.toast.show(response.data.message, 1000)
                    setTimeout(()=> {
                        that.props.navigation.navigate("Login")
                    }, 1500)
                    console.log(JSON.stringify(response.data));
                }
                else{
                    that.setState({Loader:false, Failed:true, Success:false})
                    that.toast.show(response.data.message, 1000)
                    console.log(JSON.stringify(response.data));
                }
            })
            .catch(function (error) {
                console.log(error);
                that.setState({Loader:false, Failed:false, Success:false})
                that.toast.show("Something Went Wrong", 1000)
            });
        }
    }
    
    render() {
        return (
            <View style={[styles.container,{backgroundColor:primary}]}>
                <Text style={styles.heading}>Change Your Password</Text>
                <Text style={styles.Para}>
                    <Text style={[styles.Para, {color:white, fontFamily:"Bold", fontSize:hp("2.6%")}]} >{this.state.VerifyEmail}</Text> That's great! Now you are verified. Kindly, change your password below, Thank You!
                </Text>
                <IconInput
                    icon="key"
                    pass
                    placeholder="Password" 
                    value={this.state.Password}
                    onChange={(text)=>this.setState({Password: text})}
                    iconColor={gray}
                    onSubmitPress={() => this.NextInput.focus()}
                    blur={false}
                />

                <IconInput
                    icon="key"
                    pass
                    placeholder="Confirm Password"
                    value={this.state.C_Password}
                    onChange={(text)=>this.setState({C_Password: text})}
                    iconColor={gray}
                    inputRef={ref => { this.NextInput = ref; }}
                    onSubmitPress={this.Change_Password}
                />
                
                <Button
                    text="Done"
                    color={purple}
                    textColor={white}
                    onPress={this.Change_Password}
                />

                <Spinner
                    visible={this.state.Loader}
                    textContent={"Loading..."}
                    textStyle={{fontFamily:"Bold", fontSize:hp("2.2%"), color:"white"}}
                />

                <Toast
                    ref={(toast) => this.toast = toast}
                    style={{backgroundColor:this.state.Success?"green":"black", width:"96%", zIndex:1}}
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

export default Change_Password;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        alignItems:'center',
        justifyContent:"center",
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Bold",
        color:white,
        marginTop:hp('5%'),
        letterSpacing:2
    },
    Para:{
        fontSize:hp('2%'),
        fontFamily:"Regular",
        color:white,
        marginTop:hp('2%'),
        textAlign:'left',
        width:"85%"
    },
})
