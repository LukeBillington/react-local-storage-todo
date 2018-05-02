import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from './components/Header/';
import List from './components/List/';
import './App.css';

const App = ({ store }) => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <List />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
