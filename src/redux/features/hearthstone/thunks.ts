import {createAsyncThunk} from '@reduxjs/toolkit';
import {cardAPI} from '../../../api';

export const getAllCards = createAsyncThunk('cards/all', async () => {
  const response = await cardAPI.getAll();
  const cards = response.data;
  return cards;
});
