function App() {

  return (
    <>
    {/* comment */}
      <div id="header" className="parallax-bg">
          <div className="container">
              <nav>
                  <img src="images/ego-pressed.png" alt="ego" />
                  <ul id="sidemenu">
                      <li><a href="#header">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#portfolio">Portfolio</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <i className="fas fa-times" onclick="closemenu()"></i>
                  </ul>
                  <i className="fas fa-bars" onclick="openmenu()"></i>
              </nav>
              <div className="header-text">
                  <p>Beauty Advocate</p>
                  <h1>Meet the brainchild behind<br /> <span>Elysia Foundation</span>.</h1>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, 
                          repudiandae rem pariatur impedit nemo, culpa magnam quibusdam inventore 
                          voluptate amet, soluta enim? Beatae excepturi voluptates, temporibus obcaecati, 
                          harum eaque distinctio labore quos debitis veniam fuga, magni voluptas quasi iure 
                          culpa consequuntur? Corrupti odit officia, est vel cumque voluptate atque qui.</p>

                          <div className="tab-titles">
                              <p className="tab-links active-link" onclick="opentab('skills')">Skills</p>
                              <p className="tab-links" onclick="opentab('experience')">Experience</p>
                              <p className="tab-links" onclick="opentab('education')">Education</p>
                          </div>
                          <div className="tab-contents active-tab" id="skills">
                              <ul>
                                  <li><span>Beauty</span><br />Pristine Enhancement</li>
                                  <li><span>Longevity</span><br />Forever</li>
                                  <li><span>Human</span><br />Ego</li>
                              </ul>
                          </div>
                          <div className="tab-contents" id="experience">
                              <ul>
                                  <li><span>Current</span><br />Beauty Labs at Elysia Institute</li>
                                  <li><span>2026-2030</span><br />Game Designer at Coolsky Studios</li>
                                  <li><span>2019</span><br />Video Editor from  Home</li>
                              </ul>
                          </div>
                          <div className="tab-contents" id="education">
                              <ul>
                                  <li><span>Current</span><br />Academic Director in Elysia Institute</li>
                                  <li><span>2026-2030</span><br />Computer Science in OpenAI</li>
                                  <li><span>2022-2026</span><br />IS in Bachelor of Science</li>
                              </ul>
                          </div>
                  </div>
              </div>
          </div>
      </div>

      {/*Services*/}
      <div id="services">
          <div className="container">
              <h1 className="sub-title">My Services</h1>
              <div className="services-list">
                  <div>
                      <i className="fa-solid fa-circle-half-stroke"></i>
                      <h2>Drive</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque omnis natus ipsam assumenda maxime?</p>
                      <a href="#">Learn More</a>
                  </div>
                  <div>
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                      <h2>Unlimited</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque omnis natus ipsam assumenda maxime?</p>
                      <a href="#">Learn More</a>
                  </div>
                  <div>
                      <i className="fa-solid fa-universal-access"></i>
                      <h2>Potential</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque omnis natus ipsam assumenda maxime?</p>
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
                          <p> Elevate your essence and accentuate your beauty with our carefully curated selection of transformative products.</p>
                          <a href="#"><i className="fas fa-external-link-alt"></i></a>
                      </div>
                  </div>
                  <div className="work">
                      <img src="images/work2.png" alt="yelan" />
                      <div className="layer">
                          <h3>Busted</h3>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem eum neque suscipit officia tempora.</p>
                          <a href="#"><i className="fas fa-external-link-alt"></i></a>
                      </div>
                  </div>
                  <div className="work">
                      <img src="images/work3.jpg" alt="vogue" />
                      <div className="layer">
                          <h3>Vogue</h3>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, corrupti similique? Nobis fuga assumenda voluptates.</p>
                          <a href="#"><i className="fas fa-external-link-alt"></i></a>
                      </div>
                  </div>
              </div>
              <a href="#" className="btn">See More</a>
          </div>
      </div>
      {/*Contact*/}
      <div id="contact">
          <div className="container">
              <div className="row">
                  <div className="contact-left">
                      <h1 className="sub-title">Contact Me</h1>
                      <div id="contact-left">
                      <p><i className="fas fa-paper-plane"></i> contact@example.com</p>
                      <p><i className="fas fa-phone-square-alt"></i> 0123456789</p>
                      <div className="social-icons">
                          <a href="#"><i className="fab fa-facebook"></i></a>
                          <a href="#"><i className="fab fa-twitter-square"></i></a>
                          <a href="#"><i className="fab fa-instagram"></i></a>
                          <a href="#"><i className="fab fa-linkedin"></i></a>
                      </div>
                      <a href="images/my-cv.pdf" className="btn">Download CV</a>
                      </div>
                  </div>
                  <div className="contact-right">
                      <form>
                          <input type="text" name="Name" placeholder="Your Name" required />
                          <input type="email" name="" id="Email" placeholder="Your Email" required />
                          <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                          <button type="submit" className="btn btn2">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
          <div className="copyright">
              <p>Copyright @ Ego. Made with <i className="fa-solid fa-heart-crack"></i> by The Laul Industries</p>
          </div>
      </div>
    </>
  )
}

export default App
