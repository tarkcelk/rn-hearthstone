import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './stack';

type NavigationProps = {
  children?: JSX.Element | JSX.Element[];
};

export default function Navigation({children}: NavigationProps) {
  return (
    <NavigationContainer>
      <AppStack />
      {children}
    </NavigationContainer>
  );
}
