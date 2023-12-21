// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';

const App = () => {
  const isWorkingHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();

    return day >= 1 && day <= 5 && hours >= 9 && hours < 17;
  };

  return (
    <Router>
      <div>
        <Navbar />
        {isWorkingHours() ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        ) : (
          <div>
            <h2>Sorry, the website is only available during working hours (Mon-Fri, 9 AM - 5 PM).</h2>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
