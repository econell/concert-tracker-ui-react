import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artist from './components/artist/Artist';
import Api from './api/Api';

function App() {

  const [api] = useState(new Api());

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route
          path='/'
          exact={true}
          render={(props) => <Artist {...props} api={api} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
