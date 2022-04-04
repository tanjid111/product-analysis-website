import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const { review, picture, name } = props.review;
    return (
        <div className='border-solid border-2 my-3 py-5 rounded-2xl w-3/5 mx-auto shadow-lg'>
            <div className='review flex justify-center items-center py-5'>
                <img src={picture} alt="" />
                <p className='px-5 text-3xl'>{name}</p>
            </div>

            <p className='text-center px-12 text-xl'>{review}</p>

        </div>
    );
};

export default ReviewCard;