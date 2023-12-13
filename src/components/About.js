import React from "react";
import { image } from "../data/data";

function About() {
  // const img = { image }
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I love New York</p>
    <img src= { image } alt="I made this" />
  </div>
  )
}

export default About;
