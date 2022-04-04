import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReviews()

    return (
        <div>
            <h1 className='text-5xl font-semibold text-center'> What our customers say!</h1>
            {
                reviews.map(review => <ReviewCard
                    key={review.id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;