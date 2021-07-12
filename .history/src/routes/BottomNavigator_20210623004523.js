import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// function BottomTabNavigator() {
//   return (
//       <Tab.Navigator 
//         initialRouteName="Home"
//         backBehavior
//         tabBarOptions={{
//             activeTintColor:skin,
//             showLabel:false,
//             style:{
//                 backgroundColor:black,
//                 height:hp('7.5%'),
//                 borderTopLeftRadius:hp('2%'),
//                 borderTopRightRadius:hp('2%'),
//             },
//       }}
//       >
//         <Tab.Screen 
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                   focused ? <Icon color={skin} size={28} name={'home'}/> :<Icon color={darkgray} size={28} name={'home'}/>
//                 ),  
                
//             }} 
//             name="Home" 
//             component={HomeStack}   
//         />
//         <Tab.Screen 
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                     focused ? <Icon color={skin} size={28} name={'heart'}/> : <Icon color={darkgray} size={28} name={'heart'} />
//                 ),  
//             }} 
//             name="Favourites" 
//             component={FavouritesStack} 
//         />
//         <Tab.Screen 
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                     focused ? <Icon color={skin} size={28} name={'compass'}/> : <Icon color={darkgray} size={28} name={'compass'}/>
//                 ),  
//             }} 
//             name="Discover" 
//             component={DiscoverStack} 
//         />       
//         <Tab.Screen 
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                     focused ? <Icon color={skin} size={28} name={'shopping-cart'}/> : <Icon color={darkgray} size={28} name={'shopping-cart'}/>
//                 ),  
                
//             }} 
//             name="Cart" 
//             component={CartStack}
//         />
//         <Tab.Screen 
//             options={{
//                 tabBarIcon: ({ focused }) => (
//                     focused ? <Icon color={skin} size={28} name={'user'}/> : <Icon color={darkgray} size={28} name={'user'}/>
//                 ),  
//             }} 
//             name="Profile" 
//             component={ProfileStack}
//         />
//       </Tab.Navigator>
//   );
// }



// function HomeStack() {
//     return (
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home}/>
//           <Stack.Screen name="ProductDetail" component={ProductDetail}/>
//           <Stack.Screen options={{ cardStyleInterpolator: forFade }} name="CategoryItem" component={CategoryItem}/>
//         </Stack.Navigator>
//     );
//   }
  
//   function FavouritesStack() {
//     return (
//       <Stack.Navigator>
//           <Stack.Screen name="Favourites" component={Favourites}/>
//       </Stack.Navigator>
//     );
//   }
//   function DiscoverStack() {
//     return (
//       <Stack.Navigator
//         headerMode={null}
//         >
//           <Stack.Screen name="Discover" component={Discover}/>
//           <Stack.Screen options={{ cardStyleInterpolator: forFade }} name="CategoryItemDiscover" component={CategoryItem}/>
//       </Stack.Navigator>
//     );
//   }
//   function ProfileStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="ProfileScreen" component={Profile}/>
//         <Stack.Screen name="EditProfile" component={EditProfile}/>
//         <Stack.Screen name="Settings" component={Settings}/>
//         <Stack.Screen name="TrackOrders" component={TrackOrders}/>
//         <Stack.Screen name="PastOrders" component={PastOrders}/>
//         <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="PastOrderDetails" component={PastOrderDetails}/>
//         <Stack.Screen options={{ cardStyleInterpolator: forFade }} name="LegalText" component={LegalText}/>
//         <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="ChangePassword" component={ChangePassword}/>
//       </Stack.Navigator>
//     );
//   }
//   function CartStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Cart" component={Cart}/>
//         <Stack.Screen name="Checkout" component={Checkout}/>
//       </Stack.Navigator>
//     );
//   }
  
  
  
  export default function App(){
    return(
      <Stack.Navigator
        initialRouteName="bottomTabNavigator"
        screenOptions={{
          // animationEnabled:false
        }}
      >
        {/* <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="bottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="HomeStack" component={HomeStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="FavouritesStack" component={FavouritesStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="CartStack" component={CartStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="DiscoverStack" component={DiscoverStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="ProfileStack" component={ProfileStack} />
        <Stack.Screen options={{ cardStyleInterpolator: ForSlide }} name="Search" component={Search}/> */}
      </Stack.Navigator>
    )
  }

