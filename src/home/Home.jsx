import React from 'react';
import Hero from './components/Hero.jsx';
import { Slide } from "react-awesome-reveal";
import AboutMe from './containers/AboutMe.jsx';
import PreviewMyselft from './components/PreviewMyselft.jsx';
import Services from './components/Services.jsx';

const Home = ()=> (
    <>
        <Slide direction="left">
            <Hero />
        </Slide>
        <AboutMe>
            <PreviewMyselft/>
            <Services/>
        </AboutMe>
    </>
)

export default Home;