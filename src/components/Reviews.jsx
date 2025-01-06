import { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/24/solid';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Reviews = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!t?.reviews) return null;
  const ReviewCard = ({ review }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900">{review.name}</h3>
        <div className="flex items-center space-x-1 my-2">
          {[...Array(review.rating)].map((_, i) => (
            <StarIcon
              key={i}
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm">{review.date}</p>
      </div>
      <p className="text-gray-700 leading-relaxed">{review.text}</p>
    </div>
  );

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          {t.reviews.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.reviews.items.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
