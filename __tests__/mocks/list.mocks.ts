import {CardResponseType, CardType} from '../../src/types/card';
import {MechanicType} from '../../src/types/mechanic';

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
];

const cardResponseData: CardResponseType = {
  [cardMockData[0].name]: cardMockData,
  [cardMockData[1].name]: cardMockData,
};

const preloadedState = {
  hearthstone: {
    cards: cardMockData,
    mechanics: mechanicMockData,
    error: {},
    loading: false,
    searchText: '',
  },
};

export {mechanicMockData, cardMockData, preloadedState, cardResponseData};
