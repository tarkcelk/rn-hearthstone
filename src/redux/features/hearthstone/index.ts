import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {CardType} from '../../../types/card';
import {MechanicType} from '../../../types/mechanic';
import {getAllCards} from './thunks';
import {getCardsFromResponse, getMechanicsFromCards} from './utils';

export interface HearthStoneState {
  cards: CardType[];
  mechanics?: MechanicType[];
  loading: boolean;
  error: SerializedError;
  searchText: string;
}

const initialState: HearthStoneState = {
  cards: [],
  mechanics: [],
  loading: false,
  error: {},
  searchText: '',
};

export const slice = createSlice({
  name: 'hearthstone',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCards.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        const cardResponse = action.payload;
        state.loading = false;
        state.cards = getCardsFromResponse(cardResponse);
        state.mechanics = getMechanicsFromCards(cardResponse);
      })
      .addCase(getAllCards.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.error;
      });
  },
});

export const {setSearchText, setLoading} = slice.actions;

export const reducer = slice.reducer;
