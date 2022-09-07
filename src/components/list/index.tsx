import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {ListItemType} from 'types/component';
import ListButton from '../listButton';

export type ListProps = {
  data: ListItemType[];
  onItemPress?: (item: ListItemType) => void;
  testID?: string;
};

export default function List({data, onItemPress, testID}: ListProps) {
  const renderItem = ({item, index}: ListRenderItemInfo<ListItemType>) => (
    <ListButton
      key={`mb-${item.name}-${index}`}
      data={item}
      onPress={onItemPress}
    />
  );

  return <FlatList data={data} renderItem={renderItem} testID={testID} />;
}
