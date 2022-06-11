import React from 'react';
import p1 from '../../Assets/p1.png'
import p2 from '../../Assets/p2.png'
import p3 from '../../Assets/p3.png'
import { ReactSmartScroller } from 'react-smart-scroller'
const Projects = () => {

    return (
        <div id='projects' className='my-10 '>

            <h1 className='text-4xl text-center my-10'>Projects</h1>
            <div className=''>
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 justify-evenly gap-5 my-10'>
                    <div className='md:w-1/2 sm:w-100% min-h-min mx-auto '>

                        <img src={p1} className='' alt="" />

                    </div>
                    <div className=' flex flex-col  justify-center items-center '>
                        <h1 className='text-3xl my-2'>Hardware</h1>
                        <p>Complete a hardware manufacturer system. It will offer you a minimum and maximum number
                            of items that you can order to buy and it has an interesting dashboard based on normal users
                            and an admin.An user able to pay for their ordered items also can give review about the
                            services. An admin able to manage the whole ordered products as well as users.</p>
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
                        <div className='flex flex-wrap gap-2 my-3'>
                            <p></p>
                            <a className='text-cyan-500' target='blank' href="https://assignment-12-c125c.web.app/">Live Site</a>||
                            <a className='text-cyan-500' target='blank' href="https://github.com/mak-43/manufacturer-client-site">Github Client Site</a>||
                            <a className='text-cyan-500' target='blank' href="https://github.com/mak-43/manufacturer-server-site">Github Server Site</a>

                        </div>
                        <button className='btn'>See Details</button>
                    </div>
                </div> <hr />
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 justify-evenly gap-5 my-10'>
                    <div className='md:w-1/2 sm:w-100% min-h-full mx-auto'>
                        <img src={p2} className='' alt="" />
                    </div>
                    <div className=' flex flex-col  justify-center items-center '>
                        <h1 className='text-3xl my-2'>Better Call MAK</h1>
                        <p>We are a leading law firm in financial & business industry .With more than 20 years of
                            experience</p>
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
                        <div className='flex flex-wrap gap-2 my-3'>
                            <p></p>
                            <a className='text-cyan-500' target='blank' href="https://assignment-10-fbd63.web.app/">Live Site</a>||
                            <a className='text-cyan-500' target='blank' href="https://github.com/mak-43/independent-service">Github Client Site</a>


                        </div>
                        <button className='btn'>See Details</button>
                    </div>
                </div> <hr />
                <div id='gadget' className=' grid md:grid-cols-2 sm:grid-cols-1 justify-evenly gap-5 my-10'>
                    <div className='md:w-1/2 sm:w-100% min-h-full mx-auto'>
                        <img src={p3} className='' alt="" />
                    </div>
                    <div className=' flex flex-col  justify-center items-center '>
                        <h1 className='text-3xl my-2'>Gadgets Warehouse</h1>
                        <p>Complete a Gadgets Warhouse System.Gadgets Warehouse offers technology item store services and supply chain solutions. The main
                            purpose of this website is to manage any inventory system perfectly. Users can Add, Delete
                            and View their inventory items. Also can make a delivery and restock an item with the help of
                            this system.</p>
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
                        <div className='flex flex-wrap gap-2 my-3'>
                            <p></p>
                            <a className='text-cyan-500' target='blank' href="https://assignment-11-4c723.web.app//">Live Site</a>||
                            <a className='text-cyan-500' target='blank' href="https://github.com/mak-43/warehouse-management-client-side">Github Client Site</a>||
                            <a className='text-cyan-500' target='blank' href="https://github.com/mak-43/warehouse-management-server-site">Github Server Site</a>

                        </div>
                        <button className='btn'>See Details</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Projects;