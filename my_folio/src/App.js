import React from 'react';
import { useTransition, animated } from "react-spring";
// import './components/styles.css'
import { Route, Switch, useLocation } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects'
import Navigation from './components/Navigation';

// import Stars from './components/Stars_bg'
import './App.scss'


function App() {
 const location = useLocation();
  const transitions = useTransition(location, {
    from: {opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transorm: "translate(0%, 0)"},
    leave: {opacity: 0, transform: "translate(-50%, 0"}
  })


  return (
    <div>
      <main className="App">
        <Navigation />
        {transitions( (props, item) => (
          <animated.div style={props}>
            <Switch location={item}>
              <Route component={Home} path="/" exact={true} />
              <Route component={About} path="/about" />
              <Route component={Contact} path="/contact" />
              <Route component={Projects} path="/projects" />
            </Switch>
          </animated.div>
        ))}
      </main>
    </div>
  );
}

export default App;
