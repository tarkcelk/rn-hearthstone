import {ListItemType} from './component';
import {MechanicType} from './mechanic';

export interface CardType extends ListItemType {
  cardId: string;
  cardSet: string;
  mechanics: MechanicType[];
}

export type CardResponseType = {
  [key: string]: CardType[];
};
