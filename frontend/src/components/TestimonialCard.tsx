import React, { useState } from 'react';

interface TestimonialCardProps {
  text: string;
  name: string;
  source: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  source,
  rating,
  image
}) => {
  const [expanded, setExpanded] = useState(false);
  const characterLimit = 250;

  const isLong = text.length > characterLimit;
  const displayedText = expanded ? text : text.slice(0, characterLimit) + (isLong ? '...' : '');

  return (
    <div className="bg-gradient-to-b from-[#1a1b42] to-[#3a185e] p-6 rounded-2xl text-white shadow-lg max-w-md mx-auto h-[420px] flex flex-col">
      
      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-auto pr-1">
        <div className="text-3xl text-yellow-400 mb-2">“</div>

        {/* Review Text */}
        <p className="text-white/90 leading-relaxed whitespace-pre-line">
          {displayedText}
        </p>

        {/* View More / View Less */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-yellow-400 hover:underline transition mt-2"
          >
            {expanded ? 'View Less' : 'View More'}
          </button>
        )}
      </div>

      {/* User Info (fixed at bottom) */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10 shrink-0">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-white/60">{source}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < rating ? 'text-yellow-400' : 'text-white/20'}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
