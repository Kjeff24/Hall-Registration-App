/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/ProfileScreen/ProfilePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Support from './MiniNavigations/SupportNavigation';
import Registration from './MiniNavigations/RegistrationNavigation';
import Home from '../screens/HomeScreen/HomePage';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  name: string;
  color: string;
  size: number;
}
const IonIcon: React.FC<TabIconProps> = ({name, color, size}) => (
  <Ionicons name={name} color={color} size={size} />
);
const MatIcon: React.FC<TabIconProps> = ({name, color, size}) => (
  <MaterialIcons name={name} color={color} size={size} />
);
const FontIcon: React.FC<TabIconProps> = ({name, color, size}) => (
  <FontAwesome5 name={name} color={color} size={size} />
);

const MainNavigator: React.FC = () => (
  <Tab.Navigator
    initialRouteName="AuthNavigator"
    screenOptions={{
      headerStyle: { backgroundColor: '#CBB708'},
      tabBarActiveTintColor: '#CBB708',
      // tabBarInactiveBackgroundColor: '',
    }}>
    <Tab.Screen
      name="Home"
      options={{
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => (
          <IonIcon name={'home'} color={color} size={size} />
        ),
      }}
      component={Home}
    />
    <Tab.Screen
      name="Support"
      options={{
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => (
          <MatIcon name={'contact-support'} color={color} size={size} />
        ),
      }}
      component={Support}
    />
    <Tab.Screen
      name="Profile"
      options={{
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => (
          <FontIcon name={'user'} color={color} size={size} />
        ),
      }}
      component={Profile}
    />
    <Tab.Screen
      name="Registration"
      options={{
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name={'app-registration'} color={color} size={size} />
        ),
      }}
      component={Registration}
    />
    {/* <Tab.Screen
    options={{ headerShown: false, tabBarButton: () => null }}
    name="AuthNavigator" component={AuthNavigator} /> */}
  </Tab.Navigator>
);

export default MainNavigator;
