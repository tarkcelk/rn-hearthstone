import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  style?: object;
  testID?: string;
};

export default function Container({children, style, testID}: ContainerProps) {
  return (
    <SafeAreaView style={style} testID={testID}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {children}
    </SafeAreaView>
  );
}
