import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { black } from '../assets/colors';
import { Ionicons as Icon } from '@expo/vector-icons';
import Signup from '../screens/auth/Signup';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabNavigator() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        backBehavior
        tabBarOptions={{
            activeTintColor:'red',
            showLabel:false,
            style:{
                backgroundColor:black,
                height:hp('7.5%'),
                borderTopLeftRadius:hp('2%'),
                borderTopRightRadius:hp('2%'),
            },
      }}
      >
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                  focused ? <Icon color={'red'} size={28} name={'home'}/> :<Icon color={'blue'} size={28} name={'md-home'}/>
                ),  
                
            }} 
            name="Home" 
            component={HomeStack}   
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon color={'red'} size={28} name={'heart'}/> : <Icon color={'blue'} size={28} name={'heart'} />
                ),  
            }} 
            name="Events" 
            component={EventsStack} 
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon color={'red'} size={28} name={'compass'}/> : <Icon color={'blue'} size={28} name={'compass'}/>
                ),  
            }} 
            name="Notifications" 
            component={NotificationsStack} 
        />       
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon color={'red'} size={28} name={'shopping-cart'}/> : <Icon color={'blue'} size={28} name={'shopping-cart'}/>
                ),  
                
            }} 
            name="Categories" 
            component={CategoriesStack}
        />
       
      </Tab.Navigator>
  );
}



function HomeStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
    );
  }
  
function EventsStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
    );
}
function NotificationsStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    );
}
function CategoriesStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    );
}

  
  
export default function App(){
    return(
      <Stack.Navigator
        initialRouteName="bottomTabNavigator"
        screenOptions={{
          // animationEnabled:false
          headerShown:false
        }}
      >
        <Stack.Screen name="bottomTabNavigator" component={BottomTabNavigator} />
        {/* <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="HomeStack" component={HomeStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="FavouritesStack" component={FavouritesStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="CartStack" component={CartStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="DiscoverStack" component={DiscoverStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="ProfileStack" component={ProfileStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="Search" component={Search}/> */}
      </Stack.Navigator>
    )
  }

