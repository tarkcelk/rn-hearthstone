import {FlatList} from 'react-native';
import React from 'react';
import ListButton from '../listButton';
import {ListItemType} from '../../types/component';

type ListComponentType = {
  data: ListItemType[];
  onItemPress?: (item: ListItemType) => void;
};
export default function List({data, onItemPress}: ListComponentType) {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <ListButton key={`mb-${item.name}-${index}`} data={item} onPress={onItemPress} />
      )}
    />
  );
}
