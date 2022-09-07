import {createAsyncThunk} from '@reduxjs/toolkit';
import {$Urls} from 'consts';
import {request} from 'utils/request';

export const getAllCards = createAsyncThunk('cards/all', async () => {
  const response = await request({url: $Urls.list, method: 'GET'});
  const cards = response.data;
  return cards;
});
