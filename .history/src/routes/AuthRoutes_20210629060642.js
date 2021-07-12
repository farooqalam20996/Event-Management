import React from 'react';
import {View} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { AppearanceProvider , useColorScheme} from 'react-native-appearance';
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import Slide from '../assets/animation/Slide';
import BottomNavigator from './BottomNavigator';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import { black, primary, white } from '../assets/colors';

const Stack = createStackNavigator();

const Routes = () => {

    const scheme = useColorScheme();
    const Dark = {
        dark: true,
        colors:{
            primary:primary,
            background:black,
            card: "red",
            text: "red",
            border:"blue",
            notification:"red",
        }
    }
    // state = {
    //     isLoggedin:null,
    // }
    // componentDidMount(){
    //     this.check_token();
    // }
    // check_token = async () => {
    //     await AsyncStorage.getItem('user',(err,user)=>{
    //         if(user){
    //             this.setState({isLoggedin:true});
    //             this.props.putUserData(JSON.parse(user))
    //         }else{
    //             this.setState({isLoggedin:false});
    //         }
    //     });
    // }

    // if(this.state.isLoggedin === null){
    //     return <AuthScreen/>
    // }

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
        <AppearanceProvider>
            <NavigationContainer theme={scheme === "dark" ? Dark : DefaultTheme} >
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Login" component={Login}></Stack.Screen>
                    <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
                    <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="BottomNavigator" component={BottomNavigator}></Stack.Screen>   
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    )
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         putUserData: (user) => {dispatch(putUserData(user))}
//     }
// }
// export default connect(null,mapDispatchToProps)(Routes);
export default Routes;