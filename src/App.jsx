import React from "react";
import "./App.css";

const webProjects = [
  { title: "REACT TO-DO-LIST", description: "REACT, TAILWIND", link: "#" },
  { title: "REACT + SUPABASE CRUD", description: "REACT, SUPABASE", link: "#" },
  { title: "NGO WEBSITE", description: "HTML, CSS, JS, JQUERY", link: "#" },
  { title: "E-COMMERCE", description: "HTML, CSS, JS, JQUERY, PHP, MYSQL", link: "#" },
  { title: "WASTE MANAGEMENT (SAAS)", description: "HTML, CSS, JS, JQUERY, PHP, MYSQL", link: "#" },
];

const teachingProjects = [
  { title: "ABUNDANT GRACE SCHOOLS", 
  description: "Taught HTML, CSS, JavaScript, and Scratch to students across primary and secondary levels",
  link: "https://drive.google.com/drive/folders/1pT334rZHaZvnazxYrzqVrLTkQ2j3fX_m?usp=sharing" },
];

export default function App() {
  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hello, I'm Fakunle Ayomiposi</h1>
          <p>Fullstack Web & Mobile Developer </p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </header>

      {/* About */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
        Software Developer and Coding Instructor with hands-on experience in programming fundamentals. <br />
        Skilled in building modern software using React, React-native, and Supabase, and passionate about administrative activities. 
        </p>
      </section>

      {/* Web Projects */}
      <section className="projects" id="projects">
        <h2>Web Development Projects</h2>
        <div className="project-list">
          {webProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching */}
      <section className="marketing" id="marketing">
        <h2>Teaching Projects</h2>
        <div className="project-list">
          {teachingProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Projects
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Fakunle Ayomiposi.</p>
      </footer>
    </div>
  );
}
