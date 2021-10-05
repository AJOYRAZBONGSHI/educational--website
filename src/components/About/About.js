import React from 'react';
import './About.css';

const About = () => {
    return (
      <div className="about">
        <h1>About Our Digital IT Center,</h1>
        <div>
          <div className="about-main">
            {/* left side */}
            <div>
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZnHO3RmB210ZGkV5oCCkUshTlgiwRSW7Qw&usqp=CAU"
                alt=""
              />
            </div>
            {/* right side */}
            <div className="about-text">
              <h1>
                Direct connections between servers — bypassing the internet A
                data centre evolution for APAC and beyond
              </h1>
              <p className={{ color: "aqua" }}>
                The Digital Centre is an interconnected, always-on, digital
                ecosystem. Its infrastructure goes far beyond a traditional data
                centre, offering superfast connectivity, seamless
                interoperability, with baked-in agility and scalability. Fuelled
                by the demands of Industry 4.0, the Digital Centre provides
                everything businesses, industries and economies need to succeed
                in the next-generation era.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;