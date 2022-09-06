import React from 'react';
import {ActivityIndicator} from 'react-native';
import style from './style';

export default function LoadingSpinner() {
  return (
    <ActivityIndicator
      size={'large'}
      style={style.container}
      color="#000"
      testID="loadingSpinnerComponent"
    />
  );
}
