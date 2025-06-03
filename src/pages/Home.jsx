// Home.jsx
import React, { useEffect, useRef } from 'react';
import './Home.css';
import framedImage from '../assets/images/framed_image.jpg';
import profileImg from '../assets/images/profile.png';
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {
  // Create a ref to attach to the <span> we want to type into
  const introRef = useRef(null);

  useEffect(() => {
    if (!introRef.current) return;

    const typewriter = new Typewriter(introRef.current, {
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

    // Optional cleanup if you ever unmount this component
    return () => {
      typewriter.stop();
    };
  }, []); // empty array → run once on mount

  return (
    <>
      <div className="header">
        <h1 className="name">My Portfolio</h1>
        <ul className="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>

      {/* Change the IDs/hrefs so they match actual section IDs, if you want one-page scrolling */}
      <h1 className="ra">
        <strong>Home</strong>
      </h1>

      <section className="home" id="home">
        <div className="middle">
          <p>Hey, I am Razib Khan</p>
          <p>
            Hi, I am{' '}
            <span
              id="intro"
              ref={introRef}
              className="text-cyan-300"
            ></span>
          </p>
        </div>
        <div className="image">
          <img src={profileImg} alt="Razib Khan profile" />
        </div>
      </section>

      <div className="about" id="about">
        <h2 className="me">
          <strong>About Me</strong>
        </h2>
        <p>
          Hi! I'm <strong>Razib Khan</strong>, a passionate and detail-oriented web
          developer with a focus on creating clean, responsive, and user-friendly
          web applications. I enjoy transforming ideas into reality using code and
          building products that make a difference.
        </p>
        <p>
          With a solid foundation in front-end technologies like HTML, CSS, and
          JavaScript, I also work with modern frameworks like React and back-end
          tools like Node.js and MongoDB. I'm always eager to learn, grow, and
          collaborate on exciting projects.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new tech, reading, or
          working on personal side projects to sharpen my skills.
        </p>
      </div>

      <div className="img">
        <img src={framedImage} alt="Some framed art" />
      </div>

      <div className="skills" id="skills">
        <h3>
          <strong>Skills</strong>
        </h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Vue, Angular</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Git, GitHub, REST APIs</li>
        </ul>
      </div>

      <div className="projects" id="projects">
        <h4>
          <strong>Projects</strong>
        </h4>
        <ul>
          <li>
            <strong>Portfolio Website:</strong> A responsive site to showcase my
            work and experience.
          </li>
          <li>
            <strong>Task Manager App:</strong> A full-stack app for tracking to-dos,
            built with MERN stack.
          </li>
          <li>
            <strong>Weather Dashboard:</strong> A clean UI to display real-time
            weather data using APIs.
          </li>
        </ul>
      </div>
    </>
  );
}
