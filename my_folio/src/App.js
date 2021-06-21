import React,{useState, useCallback, useEffect} from 'react';
import { useTransition, animated, AnimatedProps, useSpringRef } from "react-spring";
// import './components/styles.css'
import { Route, Switch, useLocation } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects'
import Navigation from './components/Navigation';
import './index.scss'
// import Stars from './components/Stars_bg'


 


function App() {
  const [location, setLocation] = useState(0);
  const onClick = useCallback(() => setLocation((state) => (state + 1) % 3), []);
  const transRef = useSpringRef();

//  const location = useLocation();
  // const transitions = useTransition(location, {
  //   // ref: transRef,
  //   // keys: null,
  //   // from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //   // enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   // leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },

  //   // from: { opacity: 0, transform: "translate(100%, 0%)" },
  //   from: { life: "0%", opacity: 0, height: 0 },
  //   enter: (item) => [
  //     { opacity: 1, height: 1 },
  //     { life: "100%" },
  //   ],
  //   leave: (item) => async (next, cancel) => {
  //     await next({ life: "0%" });
  //     await next({ opacity: 0 });
  //     await next({ height: 0 });
  //   },
  //   // enter: {opacity: 1, transorm: "translate(0%, 0)"},
  //   // leave: {opacity: 0, transform: "translate(-50%, 0"}
  // });

  // useEffect(() => {
  //   // transRef.start();
    
  // }, [location]);

  return (
    <div>
      <Navigation />
      <main>
       {/*<main className="App" onClick={onClick}>*/}
        {/*{transitions((props, item) => (*/}
          {/*<animated.div style={props}>*/}
            {/*<Switch location={item}>*/}
            <Switch >
              <Route component={Home} path="/" exact={true} />
              <Route component={About} path="/about" />
              <Route component={Contact} path="/contact" />
              <Route component={Projects} path="/projects" />
            </Switch>
         {/* </animated.div>*/}
        {/*))}*/}
      </main>
    </div>
  );
}

export default App;
