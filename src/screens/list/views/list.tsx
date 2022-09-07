import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from 'redux/hooks';
import {
  selectCards,
  selectMechanics,
  selectSearchText,
} from 'redux/features/hearthstone/selects';
import {getCardsBySearch} from 'redux/features/hearthstone/utils';
import {List} from 'components';
import {MechanicType} from 'types/mechanic';
import {CardType} from 'types/card';

type ResultListProps = {
  testID: string;
};

export default function ResultList({testID}: ResultListProps) {
  const mechanics = useAppSelector(selectMechanics);
  const cards = useAppSelector(selectCards);
  const searchText = useAppSelector(selectSearchText);
  const [listData, setListData] = useState<MechanicType[] | CardType[]>([]);
  const [isMechanicsShowing, setIsMechanicsShowing] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setListData(searchText ? getCardsBySearch(cards, searchText) : mechanics);
    setIsMechanicsShowing(!searchText);
    navigation.setOptions({title: !searchText ? 'Mechanics' : 'Cards'});
  }, [searchText, mechanics]);

  const onItemPress = (item: MechanicType) => {
    if (!isMechanicsShowing) return;
    navigation.navigate('Detail' as never, item as never);
  };

  return <List data={listData} onItemPress={onItemPress} testID={testID} />;
}
