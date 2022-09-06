import {RootState} from '../../store';

export const selectCards = (state: RootState) => state.hearthstone.cards;
export const selectLoading = (state: RootState) => state.hearthstone.loading;
export const selectMechanics = (state: RootState) => state.hearthstone.mechanics;
export const selectSearchText = (state: RootState) => state.hearthstone.searchText;
