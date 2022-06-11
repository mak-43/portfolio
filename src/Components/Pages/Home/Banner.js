import React from 'react';

import pic from '../../Assets/p.jpg'
import Typewriter from 'typewriter-effect'
const Banner = () => {




    return (
        <div >
            <div className='flex justify-evenly flex-row  my-10 '>
                <div className='basis-1/2  flex flex-col justify-center  '>
                    Hi ,I am Muslim Ahmed Khan <p className='text-red-500 text-xl font-bold'>
                        <Typewriter  options={{ sutoStart: true, loop: true }}
                            onInit={(typewriter) => {
                                typewriter.typeString('MERN Stack Developer').pauseFor(2000).deleteAll().typeString('Front-End Developer').pauseFor(2000).deleteAll().typeString('MERN Stack Developer').start()

                            }}
                            />
                    </p>
                    
                    {/* <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['A MERN Stack Web Developer', 'A Self Believer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        //onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </span> */}
                    <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus quia quidem a, quasi animi impedit ipsa architecto aut vero eos quod vitae quae voluptatibus fugiat totam iure unde ullam.</p>
                </div>
                <div className='basis-1/4  '>
                    <img className='rounded-full' src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;