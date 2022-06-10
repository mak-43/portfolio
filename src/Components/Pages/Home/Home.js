import React from 'react';
import Banner from './Banner';
import MVA from './MVA';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner/>
            <MVA/>
            <Projects/>
        </div>
    );
};

export default Home;