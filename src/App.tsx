import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './navigation/AppRoute';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  )
}

export default App;
