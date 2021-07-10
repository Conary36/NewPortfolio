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
          <Route exact render={()=>{
            return <About setBackground={setBackground("#DBF500")} />;
          }} path="/about" />
          <Route exact render={()=>{
            return <Contact setBackground={setBackground("#13FFB0")}/>;
          }} path="/contact" />
          <Route exact render={()=>{
            return <Projects setBackground={setBackground("#2C1591")} />;
      
          }} path="/projects" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
