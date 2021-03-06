import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Mousewheel, Pagination, EffectFade, Navigation } from "swiper/core";
import firebase from "../firebase";
import { Card, Image, Button, ButtonGroup } from "react-bootstrap";
import "../styles/projects.scss";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

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

  SwiperCore.use([Mousewheel, Pagination, EffectFade, Navigation ]);

  

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProjectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  console.log("projectData==>>", projectData);

  
  return (
    <div className="overall-container">
      <Swiper
        className="projects-slider"
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        mousewheel={true}
        pagination={{
          // el: "projects-slider__pagination",
          clickable: true,
        }}
      >
        {projectData.map((proj, i) => (
          <SwiperSlide className="parentSwiper" key={i}>
            {proj.projectImg && (
              <div className="projects-slider__img">
                <img
                  src={require(`../images/${proj.projectImg}`).default}
                  alt={proj.alt}
                  fluid
                />
              </div>
            )}

            <div className="">
              <div className="projects-slider__title">{proj.projectName}</div>
              <div className="projects-slider__text">{proj.description}</div>
            </div>

            <Button
              href={proj.projectUrl}
              className="projects-slider__button"
              target="_blank"
            >
              Open Link
            </Button>
            <div className="projects-slider__pagination"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

