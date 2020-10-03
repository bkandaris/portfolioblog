import React, { useState } from 'react';
import projects from './projects';
import ProjectCard from './ProjectCard';

const Project = () => {
  const [proj, setProj] = useState(projects);
  console.log('this is projects', proj);
  return (
    <div>
      {/* Picture first => Title on top */}
      <div>Projects Wrapper</div>
      {proj.map((item) => {
        return (
          <ProjectCard
            key={item.id}
            mainTitle={item.mainTitle}
            description={item.description}
            mainImage={item.mainImage}
          />
        );
      })}
    </div>
  );
};

export default Project;
