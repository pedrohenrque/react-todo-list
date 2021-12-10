import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';
import { Home } from './screens';
import { store } from './store';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
