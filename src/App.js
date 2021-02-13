import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/ToDo/ToDo';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import NavMenu from './components/NavMenu/NavMenu';
import SingleTask from './components/pages/SingleTask/SingleTask';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavMenu />
        <Switch>
          <Route
            path='/'
            component={ToDo}
            exact
          />
          <Route
            path='/home'
            component={ToDo}
            exact
          />
          <Route
            path='/about'
            component={About}
            exact
          />
          <Route
            path='/contact'
            component={Contact}
            exact
          />
          <Route
            path='/task'
            component={SingleTask}
            exact
          />
          <Route
            path='/not-found'
            component={NotFound}
            exact
          />
          <Redirect to='/not-found' />
        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App;
