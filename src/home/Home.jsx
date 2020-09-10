import React from 'react';
import Hero from './components/Hero.jsx';
import { Slide } from "react-awesome-reveal";

const Home = ()=> (
    <Slide direction="left">
        <Hero />
    </Slide>
)

export default Home;