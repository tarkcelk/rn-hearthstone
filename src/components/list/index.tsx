import React from 'react';
import {FlatList} from 'react-native';
import {ListItemType} from 'types/component';
import ListButton from '../listButton';

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
        <ListButton
          key={`mb-${item.name}-${index}`}
          data={item}
          onPress={onItemPress}
        />
      )}
      testID={testID}
    />
  );
}
