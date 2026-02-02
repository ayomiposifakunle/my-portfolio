import React from "react";
import "./App.css";

const webProjects = [
  { title: "Project One", description: "A web app built with React.", link: "#" },
  { title: "Project Two", description: "A mobile app built with React Native.", link: "#" },
  { title: "Project Three", description: "E-commerce website.", link: "#" },
];

const marketingProjects = [
  { title: "Campaign One", description: "Facebook Ads Campaign", link: "#" },
  { title: "Campaign Two", description: "Instagram Content Strategy", link: "#" },
  { title: "Campaign Three", description: "Email Marketing Automation", link: "#" },
];

export default function App() {
  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hello, I'm Fakunle Ayomiposi</h1>
          <p>Fullstack Developer & Digital Marketer</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </header>

      {/* About */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer and digital marketer, building web & mobile applications
          and crafting effective content strategies. I turn ideas into functional, beautiful products.
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

      {/* Digital Marketing & Content Design */}
      <section className="marketing" id="marketing">
        <h2>Digital Marketing & Content Design</h2>
        <div className="project-list">
          {marketingProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Campaign
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
        <p>© 2026 Fakunle Ayomiposi. All rights reserved.</p>
      </footer>
    </div>
  );
}
