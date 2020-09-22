import React from 'react';
import Hero from './components/Hero.jsx';
import { Slide } from "react-awesome-reveal";
import AboutMe from './containers/AboutMe.jsx';
import PreviewMyselft from './components/PreviewMyselft.jsx';

const Home = ()=> (
    <>
        <Slide direction="left">
            <Hero />
        </Slide>
        <AboutMe>
            <PreviewMyselft/>
        </AboutMe>
    </>
)

export default Home;