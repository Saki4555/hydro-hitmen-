

import React from 'react';
import {
  IconStarFilled,
  IconStarHalfFilled,
  IconStar,
  IconQuote,
} from '@tabler/icons-react';

const roundToHalf = (rating) => {
  return Math.round(rating * 2) / 2;
};

const TestimonialCard = ({ rating, testimonial, name, title }) => {
  const roundedRating = roundToHalf(rating);
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const imagePlaceholderText = name
    .split(' ')
    .map((item) => item[0])
    .join('.');

  return (
    <div className="bg-hy-bg-secondary border mb-4 border-hy-border-accent rounded-none backdrop-blur-3xl shadow-md shadow-hy-accent-secondary/40 z-50  p-12 max-w-xl flex flex-col justify-between space-y-6">
      {/* Quote Icon */}
      <IconQuote className="w-6 h-6 opacity-70" />

      {/* Testimonial Text */}
      <p className="text-hy-text-primary text-base font-medium">
        “{testimonial}”
      </p>

      {/* Author Info and Rating */}
      <div className="flex items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-hy-accent-primary/70 to-hy-accent-secondary/70 shadow-small p-2 text-sm rounded-full text-white font-bold">
            {imagePlaceholderText}
          </div>
          <div>
            <p className="font-semibold text-sm text-hy-text-primary">{name}</p>
            <p className="text-hy-text-secondary text-xs">{title}</p>
          </div>
        </div>

        <div className="flex gap-1">
          {[...Array(fullStars)].map((_, i) => (
            <IconStarFilled key={`full-${i}`} className="text-hy-accent-secondary w-4 h-4" />
          ))}
          {hasHalfStar && (
            <IconStarHalfFilled className="text-hy-bg-secondary w-4 h-4" />
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <IconStar key={`empty-${i}`} className="text-gray-600/70 w-4 h-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
