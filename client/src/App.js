import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Form from './components/Form';
import Entries from './components/Entries';
import PDF from './components/PDF';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
            <Route exact path="/form" component={Form} />
            <Route exact path="/entries" component={Entries} />
            {/* <Route exact path="/pdf" component={PDF} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
