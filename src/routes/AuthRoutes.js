import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Slide from '../assets/animation/Slide';
import UserNavigator from './UserNavigator';
import BusinessNavigator from './BusinessNavigator';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Check_email from "../screens/Forget/check_email";
import OTP_CODE from "../screens/Forget/otp_code";
import Change_Password from "../screens/Forget/change_password";
import AuthContext from '../redux/Context';
import {isReadyRef, navigationRef} from "../redux/Navigator";

import { useTheme } from '../theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { User_Data, User_Token } from '../redux/action/LoginAction';
import { primary } from '../assets/colors';
import AuthScreen from '../screens/auth/AuthScreen';

const Stack = createStackNavigator();

// const {colors} = useTheme();

class Routes extends Component {

    state = {
        isLoggedin:null,
        isUser:null,

    }

    componentDidMount(){
        this.check_token();
    }
    check_token = async () => {
        await AsyncStorage.getItem('user',(err,user)=>{
            if(JSON.parse(user)){
                if(JSON.parse(user).type == "individual"){
                    this.setState({isUser: true, isLoggedin:true})
                }
                else{
                    this.setState({isUser: false, isLoggedin:true})
                }
                this.setState({});
                this.props.putUserData(JSON.parse(user))
            }else{
                this.setState({isLoggedin:false});
            }
        });

        // await AsyncStorage.getItem('Token',(err, token)=>{
        //     if(token){
        //         this.props.User_Token(JSON.parse(token))
        //     }
        // })
    }

   

    render(){
        if(this.state.isLoggedin === null){
            return <AuthScreen/>
        }
        return(
            // <AuthContext.Provider value={{updateState:this.check_token}}>
            // {/* <View style={{flex:1,backgroundColor:'black'}}> */}
            //     <NavigationContainer
            //         ref={navigationRef}
            //         onReady={() => {
            //             isReadyRef.current = true;
            //         }}
            //     >
            //         <Stack.Navigator
            //             headerMode={null}
            //         >
            //         {
            //             this.state.isLoggedin 
            //             ?
            //         <>
            //             <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="BottomNavigator" component={BottomNavigator}></Stack.Screen>   
            //         </>
            //             :
            //         <>
            //             <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="Signup2" component={Signup2}></Stack.Screen>
            //         </>
                    
            //         }
                    
            //         </Stack.Navigator>
            //     </NavigationContainer>
            //     {/* </View> */}
            // </AuthContext.Provider>

            <AuthContext.Provider value={{ updateState: this.check_token }} >
                 <NavigationContainer 
                    ref={navigationRef}
                    onReady={()=> {isReadyRef.current = true; }}
                    theme={{colors:{background:primary}}}>
                        <Stack.Navigator headerMode="none">
                           {
                               this.state.isLoggedin
                                ?
                                this.state.isUser?
                                    <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="UserNavigator" component={UserNavigator}></Stack.Screen>
                                    :
                                    <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="BusinessNavigator" component={BusinessNavigator}></Stack.Screen>
                                :
                                <>
                                    <Stack.Screen name="Login" component={Login}></Stack.Screen>
                                    <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
                                    <Stack.Screen name="Check_email" component={Check_email}></Stack.Screen>
                                    <Stack.Screen name="OTP_CODE" component={OTP_CODE}></Stack.Screen>
                                    <Stack.Screen name="Change_Password" component={Change_Password}></Stack.Screen>
                                    {/* <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="UserNavigator" component={UserNavigator}></Stack.Screen>   
                                    <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="BusinessNavigator" component={BusinessNavigator}></Stack.Screen>  */}
                                </>
                           }   
                        </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
           
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        putUserData: (user) => {dispatch(User_Data(user))},
        User_Token: (token)=> dispatch(User_Token(token))
    }
}
export default connect(null,mapDispatchToProps)(Routes);
// export default Routes;