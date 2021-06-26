import React, {useEffect} from 'react';
import '../styles/home.scss'
import Image from 'react-bootstrap/Image'
import Slide from "@material-ui/core/Slide";


export default function Home(){

     const [checked, setChecked] = React.useState(false);

     useEffect(() => {
       setChecked((prev) => !prev);
     }, []);

    return (
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        <div>
          <section className="home_img">
            <Image fluid />
          </section>

          <section className="bio">
            <span>
              Hello, my name is Conary, I am a Front-End Web Developer with
              knowledge of
              <br />
              the Back-End. What can we create togetherlslnlsnflnsnsnflsnfl?
            </span>
            <br />
          </section>
        </div>
      </Slide>
    );
}