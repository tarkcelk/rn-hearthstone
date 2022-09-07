import {CardResponseType, CardType} from 'types/card';
import {MechanicType} from 'types/mechanic';

const mechanicMockData: MechanicType[] = [
  {
    name: 'Mechanic 1',
  },
  {
    name: 'Mechanic 2',
  },
];

const cardMockData: CardType[] = [
  {
    cardId: '1',
    cardSet: 'card set 1',
    mechanics: [],
    name: 'Card 1',
  },
  {
    cardId: '2',
    cardSet: 'card set 2',
    mechanics: mechanicMockData,
    name: 'Card 2',
  },
  {
    cardId: '3',
    cardSet: 'card set 3',
    mechanics: mechanicMockData,
    name: 'Card 3',
  },
];

const cardResponseData: CardResponseType = {
  [cardMockData[0].cardId]: cardMockData,
  [cardMockData[1].cardId]: cardMockData,
  [cardMockData[2].cardId]: cardMockData,
};

const mechaniclessCardResponseData: CardResponseType = {
  [cardMockData[0].name]: cardMockData.filter(
    cmd => cmd.mechanics.length === 0,
  ),
};

const initialState = {
  cards: [],
  error: {},
  loading: false,
  mechanics: [],
  searchText: '',
};

const preloadedState = {
  hearthstone: {
    ...initialState,
    cards: cardMockData,
    mechanics: mechanicMockData,
  },
};

export {
  mechanicMockData,
  cardMockData,
  initialState,
  preloadedState,
  cardResponseData,
  mechaniclessCardResponseData,
};
