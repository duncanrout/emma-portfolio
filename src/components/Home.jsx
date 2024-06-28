import React from 'react';
import Landing from './Landing';
import Project from './Project';

const projectData = [
    {
      name: 'Acrylic',
      description: 'Acrylic painting is a fast-drying paint made of pigment suspended in acrylic polymer emulsion. It is known for its versatility and vibrant colors.',
      subDescription: 'Acrylic artworks can resemble watercolor or oil paintings, depending on how much the paint is diluted or modified with acrylic gels, media, or pastes.',
      imagePath: '/assets/Acrylic/image3.jpg',
      path: 'Acrylic'
    },
    {
      name: 'Ceramic',
      description: 'Ceramic art involves the creation of objects from clay and other ceramic materials. These works are often functional and can include pottery and sculpture.',
      subDescription: 'Ceramic artworks are created through various techniques like hand-building, wheel-throwing, and glazing, followed by firing in a kiln.',
      imagePath: '/assets/Ceramic/image1.jpg',
      path: 'Ceramic'
    },
    {
      name: 'Digital',
      description: 'Digital art is created using digital technology as part of the creative process. This includes digital painting, 3D modeling, and other computer-generated artwork.',
      subDescription: 'Digital artworks can be printed on physical media or displayed on digital devices, offering a wide range of creative possibilities and styles.',
      imagePath: '/assets/Digital/image2.jpg',
      path: 'Digital'
    },
    {
      name: 'Maya',
      description: 'Maya is a powerful 3D computer graphics application used for creating interactive 3D applications, including video games, animated films, and visual effects.',
      subDescription: 'Artists use Maya to create highly detailed and realistic 3D models, animations, and simulations, making it a standard in the industry.',
      imagePath: '/assets/Maya/image1.jpg',
      path: 'Maya'
    },
    {
      name: 'Printmaking',
      description: 'Printmaking is the process of creating artworks by printing, typically on paper. Traditional techniques include etching, lithography, and screen printing.',
      subDescription: 'Printmaking allows for the production of multiple copies of a single artwork, with each print considered an original piece of art.',
      imagePath: '/assets/Printmaking/image2.jpg',
      path: 'Printmaking'
    },
    {
      name: 'Sculpture',
      description: 'Sculpture is a three-dimensional art form that involves shaping materials such as clay, stone, metal, or wood into artistic objects.',
      subDescription: 'Sculptures can be freestanding, reliefs, or kinetic, and they explore themes ranging from the abstract to the representational.',
      imagePath: '/assets/Sculpture/image1.jpg',
      path: 'Sculpture'
    },
    {
      name: 'Watercolor',
      description: 'Watercolor painting involves using pigments suspended in a water-based solution. It is known for its transparency and ability to produce delicate and subtle effects.',
      subDescription: 'Watercolor artworks often feature fluid and spontaneous brushwork, making it a favorite medium for landscape and portrait artists.',
      imagePath: '/assets/Watercolor/image1.jpg',
      path: 'Watercolor'
    },
    {
      name: 'ZBrush',
      description: 'ZBrush is a digital sculpting tool that combines 3D/2.5D modeling, texturing, and painting. It is widely used for creating highly detailed models.',
      subDescription: 'Artists use ZBrush for its ability to sculpt intricate details and its powerful rendering capabilities, making it ideal for character and creature design.',
      imagePath: '/assets/ZBrush/image1.jpg',
      path: 'ZBrush'
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
