import React, {useEffect, useLayoutEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Container, List} from '../../components';
import {MechanicType} from '../../types/mechanic';
import {CardType} from '../../types/card';
import {getCardsByMechanic} from '../../redux/features/hearthstone/utils';
import {useAppSelector} from '../../redux/hooks';
import {selectCards} from '../../redux/features/hearthstone/selects';

type DetailParams = {
  mechanic: MechanicType;
};

export default function Detail() {
  const cards = useAppSelector(selectCards);
  const route = useRoute<RouteProp<DetailParams, 'mechanic'>>();
  const mechanic = route.params;
  const navigation = useNavigation();
  const [mechanicCards, setMechanicCards] = useState<CardType[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({title: `cards of ${mechanic.name}`});
  }, []);

  useEffect(() => {
    !!cards && setMechanicCards(getCardsByMechanic(cards, mechanic));
  }, [cards]);

  return (
    <Container testID="containerComponent">
      <List data={mechanicCards} testID="listComponent" />
    </Container>
  );
}
