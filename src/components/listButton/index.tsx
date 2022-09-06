import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {ListItemType} from '../../types/component';

type ListButtonProps = {
  data: ListItemType;
  onPress?: (item: ListItemType) => void;
};

export default function ListButton({data, onPress}: ListButtonProps) {
  return (
    <TouchableOpacity
      style={style.mechanicButtton}
      onPress={() => onPress?.(data)}
      testID="listButtonComponent">
      <Text style={style.mechanicButtonText} testID="listButtonText">
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}
