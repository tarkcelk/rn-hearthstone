import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ListItemType} from 'types/component';
import style from './style';

type ListButtonProps = {
  data: ListItemType;
  onPress?: (item: ListItemType) => void;
};

export default function ListButton({data, onPress}: ListButtonProps) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => onPress?.(data)}
      testID="listButtonComponent">
      <Text style={style.text} testID="listButtonText">
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}
