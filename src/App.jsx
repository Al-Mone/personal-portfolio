import React, { useState, useEffect, useRef } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("skills");
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const contactLeftRef = useRef(null);
  const contactRightRef = useRef(null);

  useEffect(() => {
    // Access gsap and ScrollTrigger from the global window object
    if (window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window;

      // Register the ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Animate the header section
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top center",
            end: "center center",
            scrub: false,
          },
        });
      }

      // Animate the about section
      if (aboutRef.current) {
        gsap.from(aboutRef.current.querySelectorAll(".about-col-1, .about-col-2 p, .tab-titles, .tab-contents"), {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            end: "center center",
            scrub: false,
          },
        });
      }

      // Animate the contact section
      if (contactLeftRef.current && contactRightRef.current) {
        gsap.from(contactLeftRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactLeftRef.current,
            start: "top center",
            end: "center center",
            scrub: false,
          },
        });

        gsap.from(contactRightRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRightRef.current,
            start: "top center",
            end: "center center",
            scrub: false,
          },
        });
      }
    }
  }, []); // Run on mount

  useEffect(() => {
    const sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
      sidemenu.style.right = "-200px"; // Initialize the sidemenu position
    }
  }, []);

  const openmenu = () => {
    const sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
      sidemenu.style.right = "0";
    }
  };

  const closemenu = () => {
    const sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
      sidemenu.style.right = "-200px";
    }
  };

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <>
  <div id="header" className="parallax-bg">
    <div className="container">
      <nav>
        <img src="images/ego-pressed.png" alt="ego" />
        <ul id="sidemenu">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <i className="fas fa-times" onClick={closemenu} />
        </ul>
        <i className="fas fa-bars" onClick={openmenu} />
      </nav>
      <div className="header-text">
        <p>Beauty Advocate</p>
        <h1>
          Meet the brainchild behind
          <br />{" "}
          <span>
            Elysia Foundation
            <span />.
          </span>
        </h1>
      </div>
    </div>
  </div>
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="about-col-1 fade-img">
          <img src="images/about.png" alt="pic" />
        </div>
        <div className="about-col-2">
          <h1 className="sub-title">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            repudiandae rem pariatur impedit nemo, culpa magnam quibusdam
            inventore voluptate amet, soluta enim? Beatae excepturi voluptates,
            temporibus obcaecati, harum eaque distinctio labore quos debitis
            veniam fuga, magni voluptas quasi iure culpa consequuntur? Corrupti
            odit officia, est vel cumque voluptate atque qui.
          </p>
          <div className="tab-titles">
            <p className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                  onClick={() => opentab("skills")}>
              Skills
            </p>
            <p className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                  onClick={() => opentab("experience")}>
              Experience
            </p>
            <p className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                  onClick={() => opentab("education")}>
              Education
            </p>
          </div>
          <div id="skills" className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}>
            <ul>
              <li>
                <span>Beauty</span>
                <br />
                Pristine Enhancement
              </li>
              <li>
                <span>Longevity</span>
                <br />
                Forever
              </li>
              <li>
                <span>Human</span>
                <br />
                Ego
              </li>
            </ul>
          </div>
          <div id="experience" className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}>
            <ul>
              <li>
                <span>Current</span>
                <br />
                Beauty Labs at Elysia Institute
              </li>
              <li>
                <span>2026-2030</span>
                <br />
                Game Designer at Coolsky Studios
              </li>
              <li>
                <span>2019</span>
                <br />
                Video Editor from Home
              </li>
            </ul>
          </div>
          <div id="education" className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}>
            <ul>
              <li>
                <span>Current</span>
                <br />
                Academic Director in Elysia Institute
              </li>
              <li>
                <span>2026-2030</span>
                <br />
                Computer Science in OpenAI
              </li>
              <li>
                <span>2022-2026</span>
                <br />
                IS in Bachelor of Science
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="Resume">
    <div className="container">
      <a href="images/my-cv.pdf" className="btn">
              View CV
            </a>
    </div>
  </div>
  {/*Services*/}
  <div id="services">
    <div className="container">
      <h1 className="sub-title">My Services</h1>
      <div className="services-list">
        <div>
          <i className="fa-solid fa-circle-half-stroke" />
          <h2>Drive</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            eaque omnis natus ipsam assumenda maxime?
          </p>
          <a href="#">Learn More</a>
        </div>
        <div>
          <i className="fa-solid fa-wand-magic-sparkles" />
          <h2>Unlimited</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            eaque omnis natus ipsam assumenda maxime?
          </p>
          <a href="#">Learn More</a>
        </div>
        <div>
          <i className="fa-solid fa-universal-access" />
          <h2>Potential</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            eaque omnis natus ipsam assumenda maxime?
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  </div>
  {/*Portfolio*/}
  <div id="portfolio">
    <div className="container">
      <h1 className="sub-title">My Work</h1>
      <div className="work-list">
        <div className="work">
          <img src="images/work1.jpg" alt="elysia" />
          <div className="layer">
            <h3>Elysia Catalogue</h3>
            <p>
              {" "}
              Elevate your essence and accentuate your beauty with our carefully
              curated selection of transformative products.
            </p>
            <a href="#">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
        <div className="work">
          <img src="images/work2.png" alt="yelan" />
          <div className="layer">
            <h3>Busted</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              exercitationem eum neque suscipit officia tempora.
            </p>
            <a href="#">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
        <div className="work">
          <img src="images/work3.jpg" alt="vogue" />
          <div className="layer">
            <h3>Vogue</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              corrupti similique? Nobis fuga assumenda voluptates.
            </p>
            <a href="#">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
      <a href="#" className="btn">
        See More
      </a>
    </div>
  </div>
  {/*Contact*/}
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <div id="contact-left">
            <p>
              <i className="fas fa-paper-plane" /> contact@example.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt" /> 0123456789
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-twitter-square" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required=""
            />
            <input
              type="email"
              name=""
              id="Email"
              placeholder="Your Email"
              required=""
            />
            <textarea
              name="Message"
              rows={6}
              placeholder="Your Message"
              defaultValue={""}
            />
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>
        Copyright @ Ego. Made with <i className="fa-solid fa-heart-crack" /> by
        The Laul Industries
      </p>
    </div>
  </div>
  {/*GSAP ANIMATIONS*/}
</>
  )
}

export default App
