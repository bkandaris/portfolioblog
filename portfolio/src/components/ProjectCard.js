import React, { useState } from 'react';

const ProjectCard = (props) => {
  return (
    <div
      className='card-wrapper'>
      {/* <img src={props.mainImage} /> */}
      <h4>{props.mainTitle}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
