import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, List} from 'screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
