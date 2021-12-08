import React from 'react';
import { Provider } from 'react-redux';

import { Home } from './screens';
import store from './store';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
