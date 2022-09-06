import {Text, SafeAreaView} from 'react-native';
import React from 'react';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  style?: object;
};

export default function Container({children, style}: ContainerProps) {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
}
