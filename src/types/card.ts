import {ListItemType} from './component';
import {MechanicType} from './mechanic';

export interface CardType extends ListItemType {
  cardId: string;
  cardSet: string;
  mechanics: MechanicType[];
}

export interface CardResponseType {
  [key: string]: CardType[];
}
