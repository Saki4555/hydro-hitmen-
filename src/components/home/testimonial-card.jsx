// import React from 'react';
// import {
//   IconStarFilled,
//   IconStarHalfFilled,
//   IconStar,
// } from '@tabler/icons-react';
// import { useId } from "react";

// const roundToHalf = (rating) => {
//   return Math.round(rating * 2) / 2;
// };

// const TestimonialCard = ({ rating, testimonial, name, title }) => {
    
//   const roundedRating = roundToHalf(rating);
//   const fullStars = Math.floor(roundedRating);
//   const hasHalfStar = roundedRating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
//   const imagePlaceholderText = name
//     .split(' ')
//     .map((item) => item[0])
//     .join('.');



//   return (
//     <div className="bg-hy-bg-secondary border border-hy-border-accent rounded-none backdrop-blur-3xl shadow-md shadow-hy-accent-secondary/20 p-6 mb-4 flex flex-col items-start  max-w-sm">
        
//       {/* Star rating */}
//       <div className="flex mb-4">
//         {[...Array(fullStars)].map((_, i) => (
//           <IconStarFilled key={`full-${i}`} className="text-yellow-400/70 w-5 h-5" />
//         ))}
//         {hasHalfStar && (
//           <IconStarHalfFilled  className="text-yellow-400/80 w-5 h-5" />
//         )}
//         {[...Array(emptyStars)].map((_, i) => (
//           <IconStar key={`empty-${i}`} className="text-gray-600/70 w-5 h-5" />
//         ))}
//       </div>

//       {/* Testimonial */}
//       <p className="text-text-primary text-base mb-6 flex-grow">&quot;{testimonial}&quot;</p>

//       {/* Author */}
//       <div className="flex items-center gap-2">
//         <div className=" bg-gradient-to-r from-hy-accent-primary to-hy-accent-secondary shadow-small p-2 text-sm rounded-full text-white">
//           {imagePlaceholderText}
//         </div>
       

//         <div>
//           <p className="font-semibold text-sm text-hy-text-primary">{name}</p>
//           <p className="text-hy-text-secondary text-xs">{title}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;


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
    <div className="bg-hy-bg-secondary border mb-4 border-hy-border-accent/40 rounded-none backdrop-blur-3xl shadow-md shadow-hy-accent-secondary/40 p-6 max-w-xs flex flex-col justify-between space-y-6">
      {/* Quote Icon */}
      <IconQuote className="w-6 h-6 opacity-70" />

      {/* Testimonial Text */}
      <p className="text-hy-text-primary text-lg font-medium">
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
