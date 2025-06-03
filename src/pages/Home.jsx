import React from 'react';
import './Home.css';
import framedImage from "../assets/images/framed_image.jpg";
import profileImg from "../assets/images/profile.png";
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {
  var app = document.getElementById('intro');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });
  typewriter
    .pauseFor(50)
    .typeString('web developer')
    .pauseFor(100)
    .deleteAll(100)
    .typeString('front-end developer')
    .pauseFor(100)
    .deleteAll(100)
    .typeString('back-end developer')
    .pauseFor(100)
    .deleteAll(100)
    .start();
  return (
    <>
      <body>
        <div className='header'>
          <h1 className='name'>My Porfolio</h1>
          <ul className='list'>
            <li><a href="home">Home</a></li>
            <li><a href="About Me">About Me</a></li>
            <li><a href="Skills">Skills</a></li>
            <li><a href="projects">Projects</a></li>
          </ul>
        </div>
        <h1 className='ra'><strong>Home</strong></h1>
        <section className='home'>
          <div className='middle'>
            <p>Hey,I am</p>
            <h1>Razib Khan</h1>
            <p>Hi, I am <span id='intro' className='text-cyan-300'></span></p>
            {/* <p>I'm a passionate <strong>Web Developer</strong> specializing </p> */}
            {/* <p> in front-end and full-stack development.</p> */}
          </div>
          <div className='image'>
            <img src={profileImg}></img>
          </div>
        </section>
        <div class="about">
          <h2 className='me'><strong>About Me</strong></h2>
          <p>
            Hi! I'm <strong>Razib Khan</strong>, a passionate and detail-oriented web developer</p><p> with a focus on creating clean, responsive, and</p><p> user-friendly web applications.</p><p> I enjoy transforming ideas into reality using</p><p> code and building products that make a difference.
          </p>
          <p>
            With a solid foundation in front-end technologies</p><p> like HTML, CSS, and JavaScript,</p><p>I also work with modern frameworks</p><p> like React and back-end tools like Node.js and MongoDB.</p><p> I'm always eager to learn, grow, and collaborate on exciting projects.
          </p>
          <p>
            When I'm not coding, you'll </p><p>find me exploring new tech, reading, or working on</p> <p>personal side projects to sharpen my skills.
          </p>
        </div>
        <div className='img'>
          <img src={framedImage}></img>
        </div>

        <div class="skills">
          <h3><strong>Skills</strong></h3>
          <ul>
            <li> HTML, CSS, JavaScript</li>
            <li> React, Vue, Angular</li>
            <li> Node.js, Express, MongoDB</li>
            <li> Git, GitHub, REST APIs</li>
          </ul>
        </div>

        <div class="projects">
          <h4><strong> Projects</strong></h4>
          <ul>
            <li><strong>Portfolio Website:</strong> A responsive site to showcase my work and experience.</li>
            <li><strong>Task Manager App:</strong> A full-stack app for tracking to-dos, built with MERN stack.</li>
            <li><strong>Weather Dashboard:</strong> A clean UI to display real-time weather data using APIs.</li>
          </ul>
        </div>
      </body >
    </>
  );
}
