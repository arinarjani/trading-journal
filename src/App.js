import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShowAll from './components/ShowAll';
import Nav from './components/Nav';
import Input from './components/Input';
import TradeDetail from './components/TradeDetail';
import EditTrade from './components/EditTrade';
import DeleteTrade from './components/DeleteTrade';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/trades/new">
            <Input />
          </Route>
          <Route path="/trades/:id/edit" component={EditTrade} />
          <Route path="/trades/:id/delete" component={DeleteTrade} />
          <Route path="/trades/:id" component={TradeDetail} />
          <Route exact path="/">
            <ShowAll />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
