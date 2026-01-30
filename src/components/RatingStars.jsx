import React from "react";

const RatingStars = ({ rating }) => {
  // We'll display 5 stars max
  const stars = [];
  const maxStars = 5;
  const fullStar = Math.floor(rating / 2); // Assuming rating is out of 10
  const hasHalfStar = (rating / 2) % 1 !== 0;
  const emptyStars = maxStars - fullStar - (hasHalfStar ? 1 : 0);

  // Add full stars
  for (let i = 0; i < fullStar; i++) {
    stars.push(
      <span key={`full-${i}`} className="star filled">
        ★
      </span>
    );
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star filled half">
        ★
      </span>
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="star">
        ★
      </span>
    );
  }

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
