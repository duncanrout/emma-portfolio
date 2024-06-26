import React from 'react';
import Landing from './Landing';
import Project from './Project';

const projectData = [
  {
    name: 'Acrylic',
    description: 'This is acrylic work.',
    subDescription: 'A brief overview of this project is xyz.',
    imagePath: '/assets/Acrylic/image1.jpg',
    path: 'Acrylic'
  },
  {
    name: 'Ceramic',
    description: 'This is ceramic work.',
    subDescription: 'A brief overview of this project is xyz.',
    imagePath: '/assets/Ceramic/image1.jpg',
    path: 'Ceramic'
  }
  // Add more projects as needed
];

function Home() {
  return (
    <>
      <Landing />
      {projectData.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          subDescription={project.subDescription}
          image={project.imagePath}
          path={project.path}
        />
      ))}
    </>
  );
}

export default Home;
