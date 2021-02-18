import React from 'react';
import Hero from './components/Hero.jsx';
import AboutMe from './containers/AboutMe.jsx';
import PreviewMyselft from './components/PreviewMyselft.jsx';
import Services from './components/Services.jsx';
const Home = ()=> (
  <>
    <Hero/>
    <AboutMe>
      <PreviewMyselft/>
      <Services/>
    </AboutMe>
  </>
)

export default Home;