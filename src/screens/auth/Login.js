// import React, {useState} from 'react';
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
    Alert,
    Image,
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, gray, lightGray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import IconInput from '../../components/common/IconInput';
import { useTheme } from '../../theme/ThemeContext';
import { connect } from 'react-redux';
import {Login} from "../../redux/action/LoginAction";
import Spinner from "react-native-loading-spinner-overlay";
import Toast from "react-native-easy-toast";
import AuthContext from '../../redux/Context';
import { LoadCategories } from '../../redux/action/CategoriesAction';
import * as Facebook from "expo-facebook";

// const {colors} = useTheme();
class Login_Page extends Component{

    constructor(props){
        super(props);
        this.state={
            Email:'',
            Password:'',
            ShowToast:null
        }
    }

    // onSignInPress = () => {
    //     if(email == "user"){
    //         navigation.navigate('UserNavigator')
    //     }else {
    //         navigation.navigate('BusinessNavigator')
    //     }
    // }

    componentDidMount(){
        this.props._Categories()
        
    }

    onSignInPress = ()=> {
        Keyboard.dismiss()
        if(this.state.Email == "" || this.state.Password == ""){
                this.toast.show("Kindly, Fill The Field First  ",1000)
        }
        else{
                this.props._LoginNow(this.state.Email, this.state.Password,"","", this.context, this.toast)
            
        }
    }

    SignInWithFaceBook = async() => {
        alert("InProgress")
        // try {
        //         await Facebook.initializeAsync({
        //             appId: '593054675199896',
        //         });
        //         const {
        //             type,
        //             token,
        //             expirationDate,
        //             permissions,
        //             declinedPermissions,
        //         } = await Facebook.logInWithReadPermissionsAsync({
        //             permissions: ['public_profile'],
        //         });
        //         if (type === 'success') {
        //             const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        //         //   Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        //             const fb_name = await response.json().name;
        //             const fb_id = await response.json().id;
        //             this.props._LoginNow("", "", fb_name ,fb_id, this.context, this.toast)
        //             console.log('Logged in!', `Hi ${(await response.json()).name}!`)
        //             console.log(await response.json())
        //         } 
        //         else {
        //             console.log(await response.json())
        //             this.toast.show("Ther is come problem",1000)
        //         }
        //     } 
        //     catch ({ message }) {
        //         alert(`Facebook Login Error: ${message}`);
        //         this.toast.show(message,1000)
        //     }
    }

    SignInWithGoogle=()=>{
        alert("InProgress")
    }

    onCreateAccount = () => {
        this.props.navigation.navigate("Signup")
    }    

    render() {
        return (
            <View style={[styles.container,{backgroundColor:white}]}>
                <Image 
                    source={require("../../assets/images/logo.png")}
                    style={{width:hp("15%"), height:hp("15%")}}
                />
                <Text style={styles.heading}>Sign in</Text>
                <IconInput
                    style={styles.InputStyle}
                    icon="mail"
                    placeholder="Email Address"
                    value={this.state.Email}
                    onChange={(text)=>this.setState({Email: text})}
                    iconColor={primary}
                    onSubmitPress={() => this.NextInput.focus()}
                    blur={false}
                    keyboard={"email-address"}
                />
                <IconInput
                    style={styles.InputStyle}
                    icon="key"
                    pass
                    placeholder="Password"
                    value={this.state.Password}
                    onChange={(text)=>this.setState({Password: text})}
                    iconColor={primary}
                    inputRef={ref => { this.NextInput = ref; }}
                    onSubmitPress={this.onSignInPress}
                />
                
                <Button
                    text="SIGN IN"
                    color={purple}
                    textColor={white}
                    onPress={this.onSignInPress}
                    Loading={this.props.Loader}
                    disabled={this.props.Loader&&true}
                />
                 {/* {
                    this.props.Failed &&
                        <Text style={styles.Txt} >{this.props.error}</Text>
                } */}

                <Text onPress={()=> this.props.navigation.navigate("Check_email")} style={{color:lightGray, fontSize:hp('2%'),paddingTop:hp('3%')}}>Forget Password?</Text>

                <View style={styles.lineContainer}>
                    <View style={styles.line}/>
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line}/>
                </View>
                <Button
                    image={require('../../assets/images/google.png')}
                    text="Sign in with Google"
                    color={white}
                    textColor={black}
                     style={{elevation:4}}
                    onPress={this.SignInWithGoogle}
                />
                <Button
                    image={require('../../assets/images/fb.png')}
                    icon="Facebook"
                    text="Sign in with Facebook"
                    color={white}
                    textColor={black}
                    style={{elevation:4}}
                    onPress={this.SignInWithFaceBook}
                />
                
                <Text style={{color:lightGray, fontSize:hp('2%'),paddingTop:hp('3%')}}>Don't have an account?</Text>
                <TouchableOpacity style={{marginTop:hp('1%')}} onPress={this.onCreateAccount}>
                    <Text style={{color:lightGray, fontSize:hp('2.25%'), marginTop:hp('0.5%')}}>Create Account</Text>
                </TouchableOpacity>
               
                <Toast
                     ref={(toast) => this.toast = toast}
                     style={{backgroundColor:"black", width:"96%", zIndex:1}}
                     position="bottom"
                     positionValue={hp("2%")}
                     fadeInDuration={750}
                     fadeOutDuration={1000}
                     opacity={0.8}
                     textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                />
            </View>
        );
    }
}

Login_Page.contextType = AuthContext;


function mapStateToProps(state) {
    return{
        Loader:state.LoginReducer.Loader,
        Failed:state.LoginReducer.Failed,
        error:state.LoginReducer.error,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        _LoginNow: (Email, Password,fb_name, fb_id, context, toast)=> dispatch(Login(Email, Password,fb_name, fb_id, context, toast)),
        _Categories:()=>dispatch(LoadCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login_Page) ;



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: primary,
        alignItems:'center',
        paddingTop:hp('10%')
    },
    logo:{
        color:primary,
        fontFamily:"Bold",
        fontSize: hp('5%'),
        letterSpacing:1
    },
    heading:{
        fontSize:hp('3.75%'),
        fontFamily:"Light",
        color:primary,
        marginTop:hp('5%')
    },
    lineContainer:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('2.75%')
    },
    line:{
        backgroundColor:lightGray,
        height:hp('0.1%'),
        width:'38%',
    },
    orText:{
        color:lightGray,
        marginLeft:hp('2.5%'),
        marginRight:hp('2.5%'),
        fontFamily:'Regular'
    },
    Txt:{
        color:"red",
        fontSize:hp("2.4%"),
        fontFamily:"Regular",
        marginTop:hp("2%")
    },
    InputStyle:{
        borderColor:primary, 
        borderWidth:hp("0.25%")
    }
})
