import React from 'react';
import { connect } from 'react-redux';
import { equipmentLoadRequest } from './Container/Equipments/actions';

import Equipments from './Container/Equipments';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'


const App = ({ store }) => {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/equipments" component={Equipments} />
            <Route path="/equipments/:equipmentId" component={Equipments} />
          </Switch>
        </Router>
    </Provider>
  );
}

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(equipmentLoadRequest),
});

export default connect(false, mapDispatchToProps)(App)


