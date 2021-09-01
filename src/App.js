import React, { Fragment } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Body from './components/Body';
import './style/index.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Question />
    </Fragment>
  );
}

export default App;
