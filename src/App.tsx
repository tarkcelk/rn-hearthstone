import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}
