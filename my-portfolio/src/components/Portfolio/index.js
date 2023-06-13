import React, { useState } from 'react';
import Project from '../Project';

// Import project images
import notetaker from '../../assets/projects/notetaker.png';
import onlyrecipes from '../../assets/projects/onlyrecipes.jpg';
import weatherapp from '../../assets/projects/weatherapp.jpg';
import what2game from '../../assets/projects/what2game.jpg';
import '../../App.css';


function Portfolio() {
  const [projects] = useState([
    {
      name: 'Note Taker',
      description: 'A fun Note Taker App. Keep track of your notes.',
      image: notetaker,
      link: "https://agnotetaker.herokuapp.com/",
      repo: "https://github.com/agarcia31/NoteTaker"
    },
    {
      name: 'Only-Recipes',
      description: 'A fun recipes tracking app. Make an account and save all your recipes in one place',
      image: onlyrecipes,
      link: "https://only-recipes-app.herokuapp.com/",
      repo: "https://github.com/agarcia31/only-recipes"
    },
    {
      name: 'What is the Weather like?',
      description: 'A fun app to check the weather.',
      image: weatherapp,
      link: "https://agarcia31.github.io/Weather-DashBoard/",
      repo: "https://github.com/agarcia31/Weather-DashBoard"
    },
    {
      name: 'what2game',
      description: 'A fun game searching App. Find new games to play',
      image: what2game,
      link: "https://what2game.herokuapp.com",
      repo: "https://github.com/agarcia31/what2game"
    },
  ]);

  return (
    <div className="background-container">
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          {projects.map((project, idx) => (
            <Project
              project={project}
              key={`project-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
