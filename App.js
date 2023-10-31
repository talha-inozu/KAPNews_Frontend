import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homeScreen from './screens/homeScreen'; 
import userListScreen from './screens/userScreens/userListScreen';
import userAddScreen from './screens/userScreens/userAddScreen';
import userDeleteScreen from './screens/userScreens/userDeleteScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="User List" component={userListScreen}/>
          { 
            <><Stack.Screen name='Add User' component={userAddScreen} />
            <Stack.Screen name='Remove User' component={userDeleteScreen} /></>
          }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
