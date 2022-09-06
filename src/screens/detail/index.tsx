import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Container, List} from '../../components';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MechanicType} from '../../types/mechanic';
import {CardType} from '../../types/card';
import {getCardsByMechanic} from '../../redux/features/hearthstone/utils';
import {useAppSelector} from '../../redux/hooks';

type DetailParams = {
  mechanic: MechanicType;
};

export default function Detail() {
  const {cards} = useAppSelector(state => state);
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
    <Container>
      <List data={mechanicCards} />
    </Container>
  );
}
