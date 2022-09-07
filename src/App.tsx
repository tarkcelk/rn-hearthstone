import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import {setupStore} from './redux/store';

export default function App() {
  return (
    <Provider store={setupStore()}>
      <Navigation />
    </Provider>
  );
}
