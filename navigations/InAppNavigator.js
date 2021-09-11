import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen, {
    screenOptions as HomeScreenOptions
} from '../screens/HomeScreen';
import AuthScreen, {
    screenOptions as AuthScreenOptions
} from '../screens/AuthScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Stack Navigator In App

const CobaStackNavigator = createNativeStackNavigator();

export const InAppNavigator = () => {
    return (
        <CobaStackNavigator.Navigator>
            <CobaStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={HomeScreenOptions}
            />
            <CobaStackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </CobaStackNavigator.Navigator>
    )
}

// Stack Navigator Auth

const AuthStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator>
            <AuthStackNavigator.Screen
                name="Auth"
                component={AuthScreen}
                options={AuthScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    )
}
