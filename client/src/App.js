import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

// import Components
import Header from "./components/Header";
import Cover from "./components/Cover";
import Blog from "./components/Blog";
import Admin from "./components/Admin";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Context from './components/Context';
import PrivateRoute from "./components/PrivateRoute";
import AdminLogin from "./components/AdminLogin";
import Register from "./components/Register";

export default function App() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className="App-wrapper">
        <Router>
          <Context.Provider value={{mobile, setMobile, active, setActive}}>
            <Header />
          </Context.Provider>
          <Switch>
            <Route exact path='/' component={Cover} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route exact path="/admin/register" component={Register} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
};
