import {CardResponseType, CardType} from '../../../types/card';
import {MechanicType} from '../../../types/mechanic';

export const getMechanicsFromCards = (data: CardResponseType) => {
  if (!data) return;

  let mechanics: MechanicType[] = [];
  const cards = getCardsFromResponse(data);

  cards
    .filter(card => !!card.mechanics)
    .forEach(card => {
      const uniqueMechanics = card.mechanics.filter(um => !mechanics.some(m => m.name === um.name));
      mechanics = mechanics.concat(uniqueMechanics);
    });

  return mechanics;
};

export const getCardsFromResponse = (data: CardResponseType) => {
  const cards: CardType[] = [];

  const cardDecks = Object.keys(data).map(cardDeck => data[cardDeck]);
  cardDecks.forEach(cardDeck => {
    if (!cardDeck || !Array.isArray(cardDeck)) return;

    cardDeck.forEach(card => {
      const isAdded = cards.some(pushedCard => pushedCard.name === card.name);
      if (!isAdded) return cards.push(card);
    });
  });

  return cards;
};

export const getCardsByMechanic = (cards: CardType[], mechanic: MechanicType) => {
  return cards.filter(
    card => !!card.mechanics && card.mechanics.some(cm => cm.name === mechanic.name),
  );
};
