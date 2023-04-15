import React, { useState } from 'react';
import Project from "../Project";


function Portfolio() {

  const [projects] = useState([
    {
      name: "Only-Recipe",
      description: "A fun app where you can make a profile, add recipes, and look up different recipes.",
      link: "https://only-recipes-app.herokuapp.com/",
      repo: "https://github.com/agarcia31/only-recipes",
      image: "../components/Images/Only-Recipe", // make sure to provide the correct path
    },
    {
      name: "what2game",
      description: "A fun app to find a new game.",
      link: "https://github.com",
      repo: "https://github.com",
      image: "./component/Images/what2game.jpg", // make sure to provide the correct path
    },
    {
      name: "NoteTaker",
      description: "A fun app to help take notes.",
      link: "https://agnotetaker.herokuapp.com/",
      repo: "https://github.com/agarcia31/NoteTaker",
      image: "./component/Images/note-taker.jpg", // make sure to provide the correct path
    },
    {
      name: "Weather App",
      description: "A fun app to check the weather .",
      link: "https://agarcia31.github.io/Weather-DashBoard/",
      repo: "https://github.com/agarcia31/Weather-DashBoard",
      image: "./component/Images/weather-app.jpg", // make sure to provide the correct path
    },
  ]);
  

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
