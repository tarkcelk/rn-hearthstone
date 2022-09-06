import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {reducer} from './features/hearthstone';

const rootReducer = combineReducers({
  hearthstone: reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(logger),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
