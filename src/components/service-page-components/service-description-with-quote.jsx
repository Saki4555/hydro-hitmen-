import React from "react";

const QuoteIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 text-white mb-4"
  >
    <path
      d="M45.3333 48H48C49.7681 48 51.4638 47.2976 52.714 46.0474C53.9643 44.7971 54.6667 43.1014 54.6667 41.3333V26.6667C54.6667 24.8986 53.9643 23.2029 52.714 21.9526C51.4638 20.7024 49.7681 20 48 20H33.3333C31.5652 20 29.8695 20.7024 28.6193 21.9526C27.369 23.2029 26.6667 24.8986 26.6667 26.6667V32H32V26.6667H49.3333V41.3333H45.3333V48Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 53.3333C29.5228 53.3333 34 48.8562 34 43.3333C34 37.8105 29.5228 33.3333 24 33.3333C18.4772 33.3333 14 37.8105 14 43.3333C14 45.4294 14.6737 47.3626 15.8209 48.9733L9.33331 53.3333L14.0533 50.9173C16.8926 52.5453 20.2785 53.3333 24 53.3333Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceDescriptionWithQuote({
  title,
  description,
  phoneNumber,
}) {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pt-10 items-start">
        {/* Service Description */}
        <div className="lg:col-span-2 bg-hy-bg-secondary p-5 sm:p-8 border border-hy-border">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--color-hy-accent-title)" }}
          >
            {title || "hello"}
          </h2>
          <p className="text-hy-text-secondary text-lg leading-relaxed">
            {description || "descp"}
          </p>
        </div>

        {/* Quote Box */}
        <div className="lg:col-span-1 bg-hy-accent-primary p-8 rounded-none text-white text-center flex flex-col items-center justify-center h-full">
          <QuoteIcon />
          <p className="text-lg font-semibold opacity-90">Get a Free Quote</p>
          <a
            href={`tel:${phoneNumber?.replace(/\s/g, "")}`}
            className="text-4xl font-bold tracking-wider mt-1 hover:opacity-80 transition-opacity"
          >
            {phoneNumber || "11111"}
          </a>
        </div>
      </div>
    </>
  );
}
