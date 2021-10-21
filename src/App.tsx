import React, { lazy, Suspense }  from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import * as PATHS from "./paths/";
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { NavbarProvider } from './context/NavbarProvider';
const About = lazy(() => import('./pages'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages'));
const NoMatchRoute = lazy(() => import('./components/pageNotFound/NoMatchRoute'));

function App() {

  return (
    <Suspense
      fallback={
        <div className="has-text-white has-text-centered">
          <span>loading...</span>
        </div>
    }>
      <Switch>
        <NavbarProvider>
          <Route exact path="/" component={Home}  />
        </NavbarProvider>
          {/* <Route exact path="/contact-us" component={Contact} /> */}
          {/* <Route exact path="/about-us" component={About} /> */}
          <Route component={NoMatchRoute} />
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
