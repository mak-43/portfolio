import React from 'react';
import p1 from '../../Assets/p1.png'
const Projects = () => {
    return (
        <div className='my-10 '>
            <h1 className='text-3xl text-center my-10'>Projects</h1>
            <div className=''>
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 justify-evenly gap-5'>
                    <div className=' '>
                        <img src={p1} className='' alt="" />
                    </div>
                    <div className=' flex flex-col  justify-center items-center '>
                        <h1 className='text-3xl my-2'>Project name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo eligendi veniam ipsum veritatis impedit!</p>
                        <h1 className='text-2xl my-2'>Used Technology :</h1>
                        <div className='flex flex-wrap gap-2 justify-center items-center'>
                            <p className='border border-slate-500 px-2 p-1 rounded '>HTML</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>Tailwind</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>React JS</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>Node JS</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>MongoDB</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>Firebase</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>React Form</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>Daisy UI</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>Stripe</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>React Query</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>JWT Token</p>
                            <p className='border border-slate-500 px-2 p-1 rounded '>React Router</p>

                        </div>
                        <div className='flex flex-wrap gap-2 justify-center items-center my-5 lg:basis-1/3 md:basis-1/2 sm-basis-1'>
                            <p></p>
                            <a href="https://assignment-12-c125c.web.app/">Live Site</a>
                            <a href="https://github.com/mak-43/manufacturer-client-site">Github Client Site</a>
                            <a href="https://github.com/mak-43/manufacturer-server-site">Github Server Site</a>
                           
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Projects;