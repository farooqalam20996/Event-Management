import * as React from 'react';
import {Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { primary, white } from '../assets/colors';
import { Ionicons as Icon, Fontisto, FontAwesome } from '@expo/vector-icons';
import Home from '../screens/home/Home';
import Events from '../screens/events/Events';
import Notifications from '../screens/notifications/Notifications';
import Categories from '../screens/categories/Categories';
import Settings from '../screens/settings/Settings';
import Details from '../screens/home/Details';
import { useTheme } from '../theme/ThemeContext';
import Theme from '../screens/settings/Theme';
import Messages from '../screens/messages/Messages';
import Favorites from '../screens/favorites/Favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabNavigator() {
    const {colors} = useTheme();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior
        tabBarOptions={{
            keyboardHidesTabBar:true,
            activeTintColor:white,
            showLabel:false,
            style:{
                backgroundColor:primary,
                height:hp('9%'),
                borderTopLeftRadius:hp('3%'),
                borderTopRightRadius:hp('3%'),
                borderColor: colors.background,
            },
      }}
      >
        <Tab.Screen 
            options={{
                // tabBarLabel: true,
                tabBarIcon: ({ focused }) => (
                    <>
                        <Icon color={white} size={focused ? 30 : 27} name={'md-home'}/>
                        {true&& <Text style={{fontSize:10, color:white, fontFamily:"Regular"}}>Home</Text>}
                    </>
                ),  
                
            }} 
            name="Home" 
            component={HomeStack}   
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Fontisto color={white} size={focused ? 30 : 27} name={'star'}/> 
                        {true&& <Text style={{fontSize:10, color:white, fontFamily:"Regular"}}>Events</Text>}
                    </>
                ),  
            }} 
            name="Events" 
            component={EventsStack} 
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <FontAwesome color={white} size={focused ? 30 : 27} name={'envelope'}/>
                        {true&& <Text style={{fontSize:10, color:white, fontFamily:"Regular"}}>Messages</Text>}
                    </>
                ),
                
            }} 
            name="Messages" 
            component={MessagesStack}
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Icon color={white} size={focused ? 30 : 27} name={'list-sharp'}/>
                        {true&& <Text style={{fontSize:10, color:white, fontFamily:"Regular"}}>Categories</Text>}
                    </>
                ),
                
            }} 
            name="Categories" 
            component={CategoriesStack}
        />
        <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Icon color={white} size={focused ? 30 : 27} name={'notifications'}/>
                        {true&& <Text style={{fontSize:10, color:white, fontFamily:"Regular"}}>Notifications</Text>}
                    </>
                ),
            }} 
            name="Notifications" 
            component={NotificationsStack} 
        />       
        
       
      </Tab.Navigator>
  );
}



function HomeStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
  }
  
function EventsStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}
function NotificationsStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    );
}
function MessagesStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="messages" component={Messages} />
      </Stack.Navigator>
    );
}
function CategoriesStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="categories" component={Categories} />
      </Stack.Navigator>
    );
}
function otherStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="theme" component={Theme} />
        <Stack.Screen name="favorites" component={Favorites} />
      </Stack.Navigator>
    );
}

  
  
export default function App(){
    const { colors } = useTheme()
    return(
        <>
        <StatusBar animated style={colors.statusBar} /> 
        <Stack.Navigator
            initialRouteName="bottomTabNavigator"
            screenOptions={{
            // animationEnabled:false
                headerShown:false
            }}
        >
            <Stack.Screen name="bottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="otherStack" component={otherStack} />
            {/* <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="HomeStack" component={HomeStack} />
            <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="FavouritesStack" component={FavouritesStack} />
            <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="CartStack" component={CartStack} />
            <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="DiscoverStack" component={DiscoverStack} />
            <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="ProfileStack" component={ProfileStack} />
            <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="Search" component={Search}/> */}
        </Stack.Navigator>
        </>
    )
  }

