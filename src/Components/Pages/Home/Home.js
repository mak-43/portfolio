import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Contact from './Contact';
import MVA from './MVA';
import Projects from './Projects';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner/>
            <MVA/>
            <Projects/>
           <Contact/>
        </div>
    );
};

export default Home;