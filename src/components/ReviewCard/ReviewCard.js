import React from 'react';
import './ReviewCard.css'
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
    const { review, picture, name, rating } = props.review;
    return (
        <div className='border-solid border-2 my-3 py-5 rounded-2xl w-3/5 mx-auto shadow-lg'>
            <div className='review flex justify-center items-center pt-5'>
                <img src={picture} alt="" />
                <p className='px-5 text-3xl'>{name}</p>
            </div>
            <div className='text-center'>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>


            <p className='text-center px-12 text-xl'>{review}</p>

        </div>
    );
};

export default ReviewCard;