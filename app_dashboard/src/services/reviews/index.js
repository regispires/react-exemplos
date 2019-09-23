import axios from 'axios';

class ReviewServices {

  static async getBookingReviews() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=booking')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getBookingReviewsSortByHighestPoint() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=booking&sortBy=highestPoint')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getBookingReviewsSortByLowestPoint() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=booking&sortBy=lowestPoint')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getBookingReviewsSortByMostRecent() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=booking&sortBy=mostRecent')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getBookingReviewsCommentLike(comment) {
    return await axios.get('http://localhost:3001/api/combinedReview?source=booking&commentLike=' + comment)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getGoogleReviews() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=google')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getGoogleReviewsSortByHighestPoint() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=google&sortBy=highestPoint')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getGoogleReviewsSortByLowestPoint() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=google&sortBy=lowestPoint')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getGoogleReviewsSortByMostRecent() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=google&sortBy=mostRecent')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getGoogleReviewsCommentLike(comment) {
    return await axios.get('http://localhost:3001/api/combinedReview?source=google&commentLike=' + comment)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getAllReviews() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=all')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get all reviews:', error);
      });
  }

}

export default ReviewServices;
