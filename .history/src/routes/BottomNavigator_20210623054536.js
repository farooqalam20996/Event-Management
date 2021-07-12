import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { black, primary, white } from '../assets/colors';
import { Ionicons as Icon, Fontisto } from '@expo/vector-icons';
import Home from '../screens/auth/home/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabNavigator() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        backBehavior
        tabBarOptions={{
            activeTintColor:white,
            showLabel:false,
            style:{
                backgroundColor:primary,
                height:hp('8%'),
                borderTopLeftRadius:hp('2%'),
                borderTopRightRadius:hp('2%'),
            },
      }}
      >
        <Tab.Screen 
            options={{
                tabBarLabel: true
                tabBarIcon: ({ focused }) => (
                  <Icon color={white} size={focused ? 30 : 28} name={'md-home'}/>
                ),  
                
            }} 
            name="Home" 
            component={HomeStack}   
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Fontisto color={white} size={focused ? 30 : 28} name={'star'}/> 
                ),  
            }} 
            name="Events" 
            component={EventsStack} 
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon color={white} size={focused ? 30 : 28} name={'notifications'}/>
                ),
            }} 
            name="Notifications" 
            component={NotificationsStack} 
        />       
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon color={white} size={focused ? 30 : 28} name={'list-sharp'}/>
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
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    );
  }
  
function EventsStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="signup" component={Home} />
        </Stack.Navigator>
    );
}
function NotificationsStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="signup" component={Home} />
      </Stack.Navigator>
    );
}
function CategoriesStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="signup" component={Home} />
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

