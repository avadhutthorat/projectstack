import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vitae accusantium ullam ipsa modi rerum, mollitia voluptas, alias
            saepe culpa voluptate non dignissimos expedita rem ad voluptatem aut
            laudantium quasi.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Avadhut Thorat</div>
          <div>3rd Feb 7 Pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
