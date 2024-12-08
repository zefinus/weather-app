import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Home from './pages/Home';
// import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    // <NavigationContainer>
    <>
      <StatusBar barStyle="dark-content" />
     <Home></Home>
    </>
    //   <AppNavigator />
    // </NavigationContainer>
  );
};

export default App;