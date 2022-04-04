import React from 'react';
import laptop from '../../Assets/Images/laptop.PNG'

const Home = () => {
    return (
        <div className='py-20 border grid grid-cols-3 gap-6'>
            < div className='px-40 border col-span-2 flex flex-col justify-center items-center' >
                <h1 className='font-extrabold text-5xl'>The Flagship Killer</h1>
                <h1 className='font-extrabold text-5xl py-2 text-cyan-700'>ProArt Studiobook</h1>
                <p className='text-slate-500'>Studiobook series is a mighty powerhouse that brings ideas to life. It features the NVIDIA® Quadro GPU, and boasts a slim-bezel NanoEdge display for immersive visuals. Its combination of cutting-edge graphics and portability makes it perfect for creative professionals.</p>
                <button className='bg-cyan-600 w-32 py-3 rounded-lg mt-4 text-white font-semibold'>Live Demo</button>
            </div >
            <div className='px-3'>
                <img src={laptop} alt=""></img>
            </div>

        </div >
    );
};

export default Home;