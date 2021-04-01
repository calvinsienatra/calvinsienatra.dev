import React from 'react';
import Head from 'next/head';
import Darkmode from 'darkmode-js';
import Fade from 'react-reveal/Fade';

import {Link} from 'react-scroll';

import { Parallax } from 'react-parallax';

class Home extends React.Component {

  render() {

    const options = {
      bottom: '1em', // default: '32px'
      right: 'unset', // default: '32px'
      left: '1em', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: false // default: true
    }
     
    const darkmode = new Darkmode(options);
    // darkmode.showWidget();

    return(
      <div>
        <Head>
          <title>Calvin Sienatra | Personal Site</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="page-pagination">
            <Link className="page-item" to="home" smooth={true} spy={true}></Link>
            <Link className="page-item" to="about" smooth={true} spy={true}></Link>
            <Link className="page-item" to="experience" smooth={true} spy={true}></Link>
            <Link className="page-item" to="education" smooth={true} spy={true}></Link>
            <Link className="page-item" to="volunteer" smooth={true} spy={true}></Link>
            <Link className="page-item" to="skills" smooth={true} spy={true}></Link>
            <Link className="page-item" to="projects" smooth={true} spy={true}></Link>
          </div>

          {/* Home */}
          <Parallax blur={{ min: -15, max: 15 }} bgImage="./parallax/2.jpg" bgImageAlt="the cat" strength={500}>
          <div className="component vcenter hcenter" id="home">
          
            <div>
              <h1>
                <span className="wrap-left">Calvin</span>
                <span className="wrap-right">Sienatra</span>
              </h1>
              <h2>Software Engineer • Data Scientist • Designer</h2>
            </div>
            <div className="home-dropdown">
                <Fade top delay={600}>
                  <img className="svg-drop noselect" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgNGwtMTEuMjQ1IDE0LjM3NC0xMS4yMTktMTQuMzc0LS43ODEuNjE5IDEyIDE1LjM4MSAxMi0xNS4zOTEtLjc1NS0uNjA5eiIvPjwvc3ZnPg==" />
                </Fade>
              </div>
          </div>
          </Parallax>
          

          {/* About */}
          <div className="component vcenter" id="about">
            <div className="container">
              <div className="row row-container">
                  <div className="col-lg-3 col-md-12 col-12 vcenter hcenter tb-pad">
                    <div>
                      <Fade>
                        <img className="profile-picture" src="profile.jpg" />
                      </Fade>
                      <Fade delay={400}>
                        <h3>About Me</h3>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-12 vcenter tb-pad">
                    <Fade>
                      <p className="about-p">
                        Hey there 👋🏻!<br/><br/>
                        Growing up in Indonesia, I had always aspired to become a software engineer. I started learning Visual Basic when I was in middle school, developing custom text editors and web browsers. Later on, I jumped into developing student registration systems for my high school. I eventually moved to the United States in 2017, attended Austin Community College for a while, and transferred to UW-Madison where I will be graduating in May 2021.<br/><br/>
                        Currently, I am working on AI/ML research for the NASA Earth-Venture Instrument PREFIRE mission; developing models to accurately predict cloud cover. I am also working on a full-stack application to automate NMR data processing. Since giving back is an important part of what I do, I am currently involved in Google's Developer Student Clubs at UW-Madison where I design marketing materials and host web development workshop tutorials.<br/><br/>
                        One of my future goals includes jumping into the industry to help propel the field forward. That is why I am very humbled to announce that I will be joining Bloomberg LP as a software engineer post-graduation.
                        <br/><br/><a href="#">⬇ Download Résumé</a>
                      </p>
                    </Fade>
                  </div>
                </div>
            </div>
          </div>

          {/* Experience */}
          <Parallax blur={{ min: -15, max: 15 }} bgImage="./parallax/3.jpg" bgImageAlt="the cat" strength={500}>
          <div className="component vcenter" id="experience">
              <div className="container">
                <div className="row row-container">
                  <div className="col-lg-3 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                        <h3>Experience</h3>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-12 vcenter tb-pad">
                    <div className="box">
                      <Fade>
                      <img src="ssec-logo.png" className="ssec-logo" />
                      <img className="jpl-logo" />
                      </Fade>
                      <Fade>
                      <h4>Space Science and Engineering Center (SSEC)</h4>
                      </Fade>
                      <Fade>
                      <h5>Data Scientist & Frontend Engineer</h5> <h6>November 2019 - Present</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Devise PCA and machine learning models allowing researchers to identify clouds 90% faster</li>
                        <li>Design and implement NASA JPL's Earth Venture-Instrument <a href="https://prefire.ssec.wisc.edu" target="_blank">PREFIRE</a> website using Jekyll and Bootstrap to attract non-experts</li>
                        <li>Organize and document the codebase to make website details easily modifiable by people unfamiliar with web programming</li>
                      </ul>
                      </Fade>
                      <br/><br/>
                      <Fade>
                      <img src="uw-logo.png" className="uw-logo" />
                      </Fade>
                      <Fade>
                      <h4>The National Magnetic Resonance Facility at Madison (NMRFAM)</h4>
                      </Fade>
                      <Fade>
                      <h5>Full-stack Engineer</h5> <h6>October 2019 - Present</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Develop a full-stack ReactJS and Flask application to automate the NMR metabolite identification process</li>
                        <li>Formulate a custom Python-based CSV parser to read complex metadata files 50% faster and return error messages</li>
                      </ul>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Parallax>

            {/* Education */}
            <div className="component vcenter" id="education">
              <div className="container">
                <div className="row row-container">
                  <div className="col-lg-3 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                        <h3 className="noselect">Education</h3>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                      <img src="uw-logo.png" className="uw-logo" />
                      </Fade>
                      <Fade>
                      <h4>University of Wisconsin-Madison</h4>
                      </Fade>
                      <Fade>
                      <h5>Bachelor of Science</h5> <h6>May 2021</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Majoring in Computer Science (on track to achieve distinction in major)</li>
                        <li>Certificate in Digital Studies</li>
                      </ul>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer */}
            <Parallax blur={{ min: -15, max: 15 }} bgImage="./parallax/4.jpg" bgImageAlt="the cat" strength={500}>
            <div className="component vcenter" id="volunteer">
              <div className="container">
                <div className="row row-container">
                  <div className="col-lg-3 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                        <h3 className="white">Volunteer</h3>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-12 vcenter tb-pad">
                    <div className="box">
                      <Fade>
                      <img src="dsc-logo.png" className="dsc-logo" />
                      </Fade>
                      <Fade>
                      <h4>Developer Student Clubs at UW-Madison by Google Developers</h4>
                      </Fade>
                      <Fade>
                      <h5>Public Relations Coordinator</h5> <h6>November 2019 - Present</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Communicate with UW-Madison faculty and community members to establish the organization's legitimacy</li>
                        <li>Build the organization's internet presence to further its prominence in the Madison area</li>
                        <li>Recruit UW-Madison students and lead the public relations team</li>
                      </ul>
                      </Fade>
                      <br/><br/>
                      <Fade>
                      <img src="gb-logo.png" className="gb-logo" />
                      </Fade>
                      <Fade>
                      <h4>Garuda Bisa</h4>
                      </Fade>
                      <Fade>
                      <h5>Web Developer</h5> <h6>August 2017 - May 2019</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Overhauled <a href="https://calvinsienatra.github.io/garudabisa" target="_blank">Garuda Bisa's website</a> using ReactJS and Bootstrap to increase user readability and simplify the registration process</li>
                        <li>Gathered feedback from users to improve the website on a biweekly basis</li>
                      </ul>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Parallax>

            {/* Skills */}
            <div className="component vcenter" id="skills">
              <div className="container">
                <div className="row row-container">
                  <div className="col-lg-3 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                        <h3 className="noselect">Skills</h3>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                      <img src="py-logo.png" className="py-logo" />
                      <img src="java-logo.png" className="java-logo" />
                      <img src="js-logo.png" className="js-logo" />
                      <img src="c++-logo.png" className="cpp-logo" />
                      </Fade>
                      <Fade>
                      <h6>Programming Languages</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>C / C++</li>
                        <li>HTML/CSS</li>
                      </ul><br/>
                      </Fade>
                      <Fade>
                      <img src="react-logo.png" className="react-logo" />
                      </Fade>
                      <Fade>
                      <h6>Libraries</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>ReactJS / NextJS</li>
                        <li>Flask</li>
                        <li>Bootstrap</li>
                      </ul><br/>
                      </Fade>
                      <Fade>
                      <img src="git-logo.png" className="git-logo" />
                      </Fade>
                      <Fade>
                      <h6>Tools</h6>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Git</li>
                        <li>Eclipse</li>
                        <li>Anaconda</li>
                        <li>Adobe Photoshop / Illustrator / XD</li>
                        <li>Azure</li>
                      </ul>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <Parallax blur={{ min: -15, max: 15 }} bgImage="./parallax/5.jpg" bgImageAlt="the cat" strength={500}>
            <div className="component vcenter" id="projects">
              <div className="container">
                <div className="row row-container">
                  <div className="col-lg-3 col-md-12 col-12 vcenter tb-pad">
                    <div>
                      <Fade>
                        <h3 className="noselect">Projects</h3>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-12 vcenter tb-pad">
                    <div className="box">
                      <Fade>
                      <img className="pc-logo" />
                      </Fade>
                      <Fade>
                      <h4>Pixel.charity</h4>
                      </Fade>
                      <Fade>
                      <h5>Full-stack Developer</h5>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Develop website to sell customizable pixels in a page where the profits go to charity</li>
                        <li>Design the website template using Adobe XD</li>
                      </ul>
                      </Fade>
                    <br/><br/>
                      <Fade>
                      <img src="pl-logo.png" className="pl-logo" />
                      </Fade>
                      <Fade>
                      <h4>Paperless</h4>
                      </Fade>
                      <Fade>
                      <h5>Project Lead & Developer</h5>
                      </Fade>
                      <Fade cascade>
                      <ul>
                        <li>Proposed and led the development of an <a href="https://devpost.com/software/paperless-6lv2ke" target="_blank">electronic receipt mobile app</a> and won Capital One's best financial hack</li>
                        <li>Built a simple and easy-to-use React Native frontend application for Android devices to maximize user experience</li>
                      </ul>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Parallax>

        </main>

        <footer>
          Copyright © 2021. All Rights Reserved. Exclusively designed by <i>me</i>.
        </footer>
      </div>
    );
  }
}

export default Home;