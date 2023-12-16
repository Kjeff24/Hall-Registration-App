/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../screens/LandingPageScreen/LandingPage';
import Signup from '../screens/SignupScreen/SignupPage';
import Login from '../screens/LoginScreen/LoginPage';
import UserPortal from '../screens/UserPortalScreen/UserPortal';

const AuthStack = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {

  return (
  <AuthStack.Navigator initialRouteName="LandingPage">
    <AuthStack.Screen name="LandingPage" options={{ headerShown: false }} component={LandingPage} />
    <AuthStack.Screen name="UserPortal" options={{ headerShown: false }} component={UserPortal} />
    <AuthStack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
    <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
  </AuthStack.Navigator>
  );
  };

export default AuthNavigator;
