import React from 'react';
import {FlatList} from 'react-native';
import ListButton from '../listButton';
import {ListItemType} from '../../types/component';

export type ListProps = {
  data: ListItemType[];
  onItemPress?: (item: ListItemType) => void;
  testID?: string;
};

export default function List({data, onItemPress, testID}: ListProps) {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <ListButton key={`mb-${item.name}-${index}`} data={item} onPress={onItemPress} />
      )}
      testID={testID}
    />
  );
}
