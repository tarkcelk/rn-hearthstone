import React from 'react';
import {ActivityIndicator} from 'react-native';
import style from './style';

type LoadingSpinnerProps = {
  isLoading: boolean;
  testID?: string;
};

export default function LoadingSpinner({
  isLoading,
  testID = 'loadingSpinnerComponent',
}: LoadingSpinnerProps) {
  return (
    <ActivityIndicator
      size={'large'}
      style={style.container}
      color="#000"
      testID={testID}
      animating={isLoading}
    />
  );
}
