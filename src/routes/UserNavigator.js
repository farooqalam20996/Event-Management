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
import { useTheme } from '../theme/ThemeContext';
import Theme from '../screens/settings/Theme';
import Messages from '../screens/messages/Messages';
import Favorites from '../screens/favorites/Favorites';
import EventDetails from '../screens/events/EventDetails';
import BusinessDetails from '../screens/home/BusinessDetails';
import ChatRoom from '../screens/messages/ChatRoom';
import Reservation from '../screens/events/Reservation';
import Slide from '../assets/animation/Slide'
import CommonNavigator from './Common_Navigator';
import Edit_Business from '../screens/settings/Account_Setting/Edit_Business';
import Account_Setting from '../screens/settings/Account_Setting/Account_Setting';
import EventsBy_Category from '../screens/categories/EventsBy_Category';
import CardDetails from '../screens/others/CardDetails';
import Search_Business from "../screens/home/Search__Events&Business";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function UserNavigator() {
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
            initialParams={{colors}}
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
            initialParams={{colors}}
        />
        {/* <Tab.Screen 
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
        /> */}
         <Tab.Screen 
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <FontAwesome color={white} size={focused ? 30 : 27} name={'heart'}/>
                        {true&& <Text style={{fontSize:10, color:white, fontFamily:"Regular"}}>Favorites</Text>}
                    </>
                ),
                
            }} 
            name="Favorites" 
            component={FavoriteStack}
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
            <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
            <Stack.Screen name="Search_Business" component={Search_Business} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="EventsBy_Category" component={EventsBy_Category} />
        </Stack.Navigator>
    );
  }
  
function EventsStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="Reservation" component={Reservation} />
            <Stack.Screen name="Search_Business" component={Search_Business} />
        </Stack.Navigator>
    );
}

function MessagesStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    );
}

function FavoriteStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      </Stack.Navigator>
    );
} 

function CategoriesStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="EventsBy_Category" component={EventsBy_Category} />
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
function OtherStack() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="CommonNavigator" component={CommonNavigator}/>
        {/* <Stack.Screen name="Theme" component={Theme} /> */}
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        {/* <Stack.Screen name="ChatRoom" component={ChatRoom} /> */}
      </Stack.Navigator>
    );
}

  
  
export default function App(){
    const { colors } = useTheme()
    return(
        <>
        <StatusBar animated style={colors.statusBar} /> 
        <Stack.Navigator
            initialRouteName="BottomTabNavigator"
            screenOptions={{
            // animationEnabled:false
                headerShown:false
            }}
        >
            <Stack.Screen name="UserNavigator" component={UserNavigator} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="HomeStack" component={HomeStack} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="EventsStack" component={EventsStack} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="MessagesStack" component={MessagesStack} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="NotificationsStack" component={NotificationsStack} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="CategoriesStack" component={CategoriesStack} />
            {/* <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="EventsBy_Category" component={EventsBy_Category} /> */}
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="OtherStack" component={OtherStack}/>

            {/* <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Messages" component={Messages} /> */}
            {/* <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="ChatRoom" component={ChatRoom} /> */}
            {/* <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="CommonNavigator" component={CommonNavigator}/> */}
            {/* <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Account_Setting" component={Account_Setting}/>
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Edit_Business" component={Edit_Business}/>  */}
        </Stack.Navigator>
        </>
    )
  }

