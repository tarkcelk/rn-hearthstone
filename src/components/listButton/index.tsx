import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ListItemType} from 'types/component';
import style from './style';
import {$Images} from 'consts';

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
      <View style={style.imageContainer}>
        <Image
          source={{uri: data.img ?? $Images.hearthStoneLogo}}
          style={style.image}
        />
      </View>

      <Text style={style.text} testID="listButtonText">
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}
