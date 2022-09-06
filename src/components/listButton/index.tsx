import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {ListItemType} from '../../types/component';

type ListButtonType = {
  data: ListItemType;
  onPress?: (item: ListItemType) => void;
};

export default function ListButton({data, onPress}: ListButtonType) {
  return (
    <TouchableOpacity style={style.mechanicButtton} onPress={() => onPress?.(data)}>
      <Text style={style.mechanicButtonText}>{data.name}</Text>
    </TouchableOpacity>
  );
}
