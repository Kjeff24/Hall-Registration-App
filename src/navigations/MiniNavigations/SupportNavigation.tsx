/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SupportMain from '../../screens/SupportScreeen/SupportPage';
import SupportDetail from '../../screens/SupportScreeen/SuportDetail/SupportDetailPage';

const Stack = createNativeStackNavigator();

const Support = () => (
  <Stack.Navigator initialRouteName="SupportMain">
    <Stack.Screen name="SupportMain" options={{headerShown: false}} component={SupportMain} />
    <Stack.Screen name="SupportDetail" options={{headerShown: false}}  component={SupportDetail} />
  </Stack.Navigator>
);

export default Support;
