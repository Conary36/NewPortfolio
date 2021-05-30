import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
import firebase from "../firebase";
import { Card, Image, Button, ButtonGroup } from "react-bootstrap";
import "../styles/projects.scss";
// import "../styles/swiper.css";
// import {Link} from 'react-router-dom'

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjectData = async () => {
    setLoading(true);
    let projects = await firebase.firestore().collection("projects").get();
    projects = projects.docs.map((project) => project.data());
    setProjectData(projects);
    setLoading(false);
  };

  SwiperCore.use([Mousewheel, Pagination]);

  // const swiper = (".projects-slider", {
  //   spaceBetween: 30,
  //   effect: "fade",
  //   loop: true,
  //   mousewheel: {
  //     invert: false,
  //   },
  //   // autoHeight: true,
  //   pagination: {
  //     el: ".projects-slider__pagination",
  //     clickable: true,
  //   },
  // });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProjectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  console.log("projectData==>>", projectData);

  // description: "some derjhfdkfbdjhbkjlsdbjhlbjsbhjbsdhjbdsjbh";
  // projectImg: "stash.png";
  // projectName: "Stash";
  // projectUrl: "https://stashfoodapp.netlify.app";

  return (
    <Swiper
      className="projects-slider"
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      mousewheel={{ invert: false }}
      pagination={{
        el: "projects-slider__pagination",
        clickable: true,
      }}
      // className="mySwiper"
    >
      <div className="projects-slider swiper-container-fade swiper-container-horizontal">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="projects-slider__item swiper-slide">
            {projectData.map((proj, i) => (
              <Card key={i} className="projects-slider__img">
                <SwiperSlide>
                  {proj.projectImg && (
                    
                      <img
                        src={require(`../images/${proj.projectImg}`).default}
                        alt={proj.alt}
                        fluid
                      />
          
                  )}

                  <div className="projects-slider__content">
                    <div className="projects-slider__title">
                      {proj.projectName}
                    </div>
                    <div className="projects-slider__text">
                      {proj.description}
                    </div>
                  </div>

                  <Button
                    href={proj.projectUrl}
                    className="projects-slider__button"
                    target="_blank"
                  >
                    Open Link
                  </Button>
                </SwiperSlide>
              </Card>
            ))}
            <div className="projects-slider__pagination"></div>
          </div>
        </div>
      </div>
    </Swiper>

    // <Swiper
    //   className="projects-slider"
    //   spaceBetween={30}
    //   direction={"vertical"}
    //   slidesPerView={1}
    //   effect={"fade"}
    //   loop={true}
    //   mousewheel={{ invert: false }}
    //   pagination={{
    //     el: "projects-slider__pagination",
    //     clickable: true,
    //   }}
    // >
    //   <div className="projects-slider swiper-container-fade swiper-container-horizontal">
    //     <div className="projects-slider__wrp swiper-wrapper">
    //       <div className="projects-slider__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active">
    //         {loading ? <h1>Loading...</h1> : null}

    //         {projectData.map((proj, i) => (
    //           <Card key={i} className="">
    //             <SwiperSlide>
    //               {proj.projectImg && (
    //                 <span className="projects-slider__img">
    //                   <Image
    //                     src={require(`../images/${proj.projectImg}`).default}
    //                     alt={proj.alt}
    //                     fluid
    //                   />
    //                 </span>
    //               )}
    //               <div className="projects-slider__content">
    //                 <div className="projects-slider__title">
    //                   {proj.projectName}
    //                 </div>
    //                 <div className="projects-slider__text">
    //                   {proj.description}
    //                 </div>
    //               </div>

    //               <Button
    //                 href={proj.projectUrl}
    //                 className="projects-slider__button"
    //                 target="_blank"
    //               >
    //                 Open Link
    //               </Button>
    //             </SwiperSlide>
    //           </Card>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="projects-slider__pagination"></div>
    //   </div>
    // </Swiper>
  );
}

/*

<ul>
                  <li>{proj.projectName}</li>
                  <li>{proj.description}</li>
                  <li>
                    {" "}
                    <Button
                      href={proj.projectUrl}
                      className="projects-slider__button"
                      target="_blank"
                    >
                      Open Link
                    </Button>
                  </li>
                </ul>

*/
