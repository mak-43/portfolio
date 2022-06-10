import React from 'react';

const MVA = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 my-5 gap-2'>
                <div className='flex flex-col justify-center items-center border-2 border-slate-700 p-2'>
                    <h1 className='bg-black text-white font-bold text-2xl my-3 p-3 rounded-full mt-[-30px]'>M</h1>
                    <p>Mission</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio omnis at aliquam molestias et. Quidem aliquam culpa repellat qui.</p>
                </div>
                <div  className='flex flex-col justify-center items-center  border-2 border-slate-700 p-2'>
                    <h1 className='bg-black text-white font-bold text-2xl my-3 p-3 rounded-full mt-[-30px]'>V</h1>
                    <p>Vission</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio omnis at aliquam molestias et. Quidem aliquam culpa repellat qui.</p>
                </div>
                <div  className='flex flex-col justify-center items-center  border-2 border-slate-700 p-2'>
                    <h1 className='bg-black text-white font-bold text-2xl my-3 p-3 rounded-full mt-[-30px]'>G</h1>
                    <p>Goal</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio omnis at aliquam molestias et. Quidem aliquam culpa repellat qui.</p>
                </div>
            </div>
        </div>
    );
};

export default MVA;