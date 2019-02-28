import React from "react";
import "./css/skills/skills.css";
const Skills = () => {
  return (
    <React.Fragment>
      <h1 id="skillsh">Skills</h1>

      <div className="skills">
        <div className="languages">
          <h3>Front-end languages I use</h3>
          <br />
          <ul>
            <li>
              <i className="fab fa-html5 " /> HTML
            </li>
            <li>
              <i className="fab fa-css3-alt" /> CSS
            </li>
            <li>
              <i className="fab fa-js-square" /> JAVA SCRIPT
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="libraries">
          <h3>Libraries / Frameworks / Tools</h3>
          <br />
          <ul>
            <li>
              <i className="fab fa-react" /> REACT.JS
            </li>
            <li>
              <i className="fas fa-code" /> P5.JS
            </li>
            <li>
              <i className="fab fa-sass" /> SASS
            </li>
            <li>
              <i className="fab fa-chrome" /> Chrome / React Dev Tools
            </li>
          </ul>
        </div>
        <br />
      </div>
    </React.Fragment>
  );
};

export default Skills;
