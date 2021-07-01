import React,{useState, useCallback, useEffect} from 'react';
// import './components/styles.css'
import { Route, Switch, } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects'
import Navigation from './components/Navigation';
import './index.scss'
// import Stars from './components/Stars_bg'


 


function App() {

  const [background, setBackground] = useState("");
 //Pass 

  return (
    <div style={{ backgroundColor: background }}>
      <Navigation  />
      <main>
        <Switch>
          <Route
            exact
            render={() => {
              return <Home setBackground={setBackground("#e600a6")} />;
            }}
            path="/"
          />
          <Route exact component={About} path="/about" />
          <Route exact component={Contact} path="/contact" />
          <Route exact component={Projects} path="/projects" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
