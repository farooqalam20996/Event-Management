import React from 'react';
import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Settings from '../screens/settings/Settings';
import Account_Setting from '../screens/settings/Account_Setting/Account_Setting';
import Edit_Business from '../screens/settings/Account_Setting/Edit_Business';
import Theme from '../screens/settings/Theme';
import Slide from "../assets/animation/Slide";
import Change_Password from "../screens/settings/Account_Setting/Change_Password";
import Edit_Account from '../screens/settings/Account_Setting/Edit_Account';
import AboutApp from '../screens/settings/Account_Setting/AboutApp';
import Notification_Setting from "../screens/settings/Account_Setting/Notification_Setting";

const Stack = createStackNavigator();

function CommonNavigator(params) {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Account_Setting" component={Account_Setting}/>
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Edit_Business" component={Edit_Business}/>
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Edit_Account" component={Edit_Account}/>
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Notification_Setting" component={Notification_Setting}/>
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Theme" component={Theme} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="Change_Password" component={Change_Password} />
            <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="AboutApp" component={AboutApp} />
        </Stack.Navigator>
    )
}

export default CommonNavigator;