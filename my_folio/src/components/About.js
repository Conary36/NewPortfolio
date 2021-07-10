import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/about.scss';
import Slide from "@material-ui/core/Slide";



export default function About() {
  const [checked, setChecked] = React.useState(false);

   useEffect(()=>{
       setChecked((prev) => !prev)
   },[])

  return (
    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
      <div>
        <section className="about_floating">
          <div className="card_body">
            <div className="thickness"></div>
            <div className="thickness"></div>
            <div className="thickness"></div>
            <div className="bio">
              <h1>About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>My creative abilities come to life</p>
            </div>
          </div>
        </section>

        <Link id="p_btn" to="/projects">
          <button>Projects</button>
        </Link>
      </div>
    </Slide>
  );
}