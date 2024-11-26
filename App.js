import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Register from './src/screens/register';
import RecoveryAccount from './src/screens/recoveryAccount';
import Layout from './src/screens/_layout'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecoveryAccount" component={RecoveryAccount} />
        <Stack.Screen name="Layout" component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;