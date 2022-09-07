import {CardResponseType, CardType} from 'types/card';
import {MechanicType} from 'types/mechanic';

export const getMechanicsFromCards = (data: CardResponseType) => {
  let mechanics: MechanicType[] = [];
  const cards = getCardsFromResponse(data);

  cards
    .filter(card => !!card.mechanics)
    .forEach(card => {
      const uniqueMechanics = card.mechanics.filter(
        um => !mechanics.some(m => m.name === um.name),
      );
      mechanics = mechanics.concat(uniqueMechanics);
    });

  return mechanics;
};

export const getCardsFromResponse = (data: CardResponseType) => {
  let cards: CardType[] = [];

  const cardDecks = Object.keys(data).map(cardDeck => data[cardDeck]);
  cardDecks.forEach(cardDeck => {
    cards = cards.concat(cardDeck);
  });

  return cards;
};

export const getCardsByMechanic = (
  cards: CardType[],
  mechanic: MechanicType,
) => {
  return cards.filter(
    card =>
      !!card.mechanics && card.mechanics.some(cm => cm.name === mechanic.name),
  );
};

export const getCardsBySearch = (cards: CardType[], searchText: string) => {
  return cards.filter(card => card.name.includes(searchText));
};
