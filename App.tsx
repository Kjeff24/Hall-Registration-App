import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigation';
import MainNavigator from './src/navigations/MainNavigation';

function App(): React.JSX.Element {
  const isLoggedIn = true;
  // State to track login status

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
