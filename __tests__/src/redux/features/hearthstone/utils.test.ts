import {
  getCardsByMechanic,
  getCardsFromResponse,
  getMechanicsFromCards,
} from 'redux/features/hearthstone/utils';
import {
  cardMockData,
  cardResponseData,
  mechanicMockData,
} from '../../../../mocks/list.mocks';

describe('redux slice utils tests', () => {
  it('should not throw error when wrong parameter given', () => {
    const mechanics = getMechanicsFromCards({});
    const cards = getCardsFromResponse({});

    expect(mechanics).toStrictEqual([]);
    expect(cards).toStrictEqual([]);
  });

  it('should return mechanics when card response provided', () => {
    const mechanics = getMechanicsFromCards(cardResponseData);
    expect(mechanics?.length).toBeGreaterThanOrEqual(1);
  });

  it('should return cards when card response provided', () => {
    const cards = getCardsFromResponse(cardResponseData);
    expect(cards.length).toBeGreaterThanOrEqual(1);
  });

  it('should return mechanic cards', () => {
    const mechanicCards = getCardsByMechanic(cardMockData, mechanicMockData[0]);
    expect(mechanicCards.length).toBeGreaterThanOrEqual(1);
  });
});
