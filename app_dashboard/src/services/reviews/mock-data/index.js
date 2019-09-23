// Mock data
import reviews from '../../../data/reviews.js';

export const getReviews = (limit = 6) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        reviews: reviews.slice(0, limit),
        reviewsTotal: reviews.length
      });
    }, 700);
  });
};
