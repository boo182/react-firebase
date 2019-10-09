import React from 'react';
import { connect } from 'react-redux';
import { equipmentLoadRequest } from './Container/Equipments/actions';

import Equipments from './Container/Equipments';
import Detail from './Container/Detail';
import TopBar from './Container/TopBar';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history"

import { Provider } from 'react-redux'
const customHistory = createBrowserHistory()


const App = ({ store }) => {
  return (
    <Provider store={store}>
        <TopBar />
        <Router history={customHistory}>
          <Route path="/" component={Equipments} />
          <Route path="/equipments/:equipmentId" component={Detail} />
        </Router>
    </Provider>
  );
}

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(equipmentLoadRequest),
});

export default connect(false, mapDispatchToProps)(App)


