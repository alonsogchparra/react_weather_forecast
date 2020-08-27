import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainView } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
