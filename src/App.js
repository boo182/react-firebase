import React from 'react';
import { Provider } from 'react-redux';

import Equipments from './Container/Equipments';
import Detail from './Container/Detail';
import TopBar from './Container/TopBar';

import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { history } from './configureStore'


const App = ({ store }) => {
  return (
      <Provider store={store}>
        <TopBar />
        <ConnectedRouter history={history}>
          <Route path="/equipments" component={Equipments} />
          <Route path="/equipment/:equipmentId" component={Detail} />
        </ConnectedRouter>
      </Provider>
  );
}

export default App;


