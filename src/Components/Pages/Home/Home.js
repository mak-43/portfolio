import React from 'react';
import Banner from './Banner';
import MVA from './MVA';
import Projects from './Projects';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner/>
            <MVA/>
            <Projects/>
            <Skill/>
        </div>
    );
};

export default Home;