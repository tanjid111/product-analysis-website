import React from 'react';
import { useNavigate } from 'react-router-dom';
import laptop from '../../Assets/Images/laptop.PNG'
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const navigate = useNavigate();
    const goToReviews = () => {
        navigate('/reviews')
    }

    return (
        <div>
            <div className='py-20 grid grid-cols-1 sm:grid-cols-3 gap-6'>
                < div className=' px-12 sm:col-span-2 flex flex-col justify-center items-center' >
                    <h1 className='font-extrabold text-5xl'>The Flagship Killer</h1>
                    <h1 className='font-extrabold text-5xl py-2 text-cyan-700'>ProArt Studiobook</h1>
                    <p className='text-slate-500'>Studiobook series is a mighty powerhouse that brings ideas to life. It features the NVIDIA® Quadro GPU, and boasts a slim-bezel NanoEdge display for immersive visuals. Its combination of cutting-edge graphics and portability makes it perfect for creative professionals.</p>
                    <button className='bg-cyan-600 w-32 py-3 rounded-lg mt-4 text-white font-semibold'>Live Demo</button>
                </div >
                <div className='px-3'>
                    <img src={laptop} alt=""></img>
                </div>
            </div >
            <div className='font-bold text-4xl text-center'>
                <h1>Customer Reviews: {reviews.slice(0, 3).length}</h1>
            </div>
            <div>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
            <div className='text-center my-5'>
                <button onClick={goToReviews} className='w-32 py-3 rounded-lg mt-4 text-white font-semibold bg-red-600'>See all Reviews</button>
            </div>


        </div >
    );
};

export default Home;