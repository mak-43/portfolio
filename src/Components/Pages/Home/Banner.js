import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import pic from '../../Assets/p.jpg'
const Banner = () => {




    return (
        <div >
            <div className='flex justify-evenly flex-row  px-10 '>
                <div className='basis-1/2 '>
                    Hi ,I am Muslim Ahmed Khan  {' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
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
                    </span>
                </div>
                <div className='basis-1/4  '>
                    <img src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;