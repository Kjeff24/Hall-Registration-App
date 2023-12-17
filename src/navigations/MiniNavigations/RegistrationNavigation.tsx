/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegMain from '../../screens/RegistrationScreen/RegMainScreen/RegMain';
import RegDues from '../../screens/RegistrationScreen/RegDuesScreen/RegDues';
import RegQR from '../../screens/RegistrationScreen/RegQRScreen/RegQR';
import RegDetails from '../../screens/RegistrationScreen/RegDetailScreen/RegDetails';

const Stack = createNativeStackNavigator();

const Registration = () => (
  <Stack.Navigator initialRouteName="RegMain">
    <Stack.Screen name="RegMain" options={{headerShown: false}}  component={RegMain} />
    <Stack.Screen name="RegDues" options={{headerShown: false}}  component={RegDues} />
    <Stack.Screen name="RegDetails" options={{headerShown: false}}  component={RegDetails} />
    <Stack.Screen name="RegQR" options={{headerShown: false}}  component={RegQR} />
  </Stack.Navigator>
);

export default Registration;
