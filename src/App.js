import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './container/homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
