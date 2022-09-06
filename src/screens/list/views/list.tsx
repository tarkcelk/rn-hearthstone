import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../../redux/hooks';
import {MechanicType} from '../../../types/mechanic';
import {CardType} from '../../../types/card';
import {useNavigation} from '@react-navigation/native';
import {List} from '../../../components';

export default function ResultList() {
  const {mechanics, cards, searchText} = useAppSelector(state => state);
  const [resultData, setResultData] = useState<MechanicType[] | CardType[]>([]);
  const navigation = useNavigation();
  const [isMechanicsShowing, setIsMechanicsShowing] = useState(true);

  useEffect(() => {
    if (searchText) return setCardsData();
    setMechanicsData();
  }, [searchText, mechanics]);

  const setMechanicsData = () => {
    mechanics && setResultData(mechanics);
    setHeader('Mechanics');
    setIsMechanicsShowing(true);
  };

  const setCardsData = () => {
    const searchedCards = cards.filter(card => card.name.startsWith(searchText));
    navigation.setOptions({title: 'Cards'});
    setResultData(searchedCards);
    setHeader('Cards');
    setIsMechanicsShowing(false);
  };

  const setHeader = (title: string) => {
    navigation.setOptions({title});
  };

  const onItemPress = (item: MechanicType) => {
    if (!isMechanicsShowing) return;
    navigation.navigate('Detail' as never, item as never);
  };

  return <List data={resultData} onItemPress={onItemPress} />;
}
