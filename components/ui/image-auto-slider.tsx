import React from 'react';

export interface SlideItem {
  title: string;
  description: string;
  image: string;
}

interface ImageAutoSliderProps {
  items: SlideItem[];
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({ items }) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 40s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
        }

        .image-item:hover .overlay {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <div className="w-full relative overflow-hidden flex items-center justify-center py-12">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedItems.map((item, index) => (
                <div
                  key={index}
                  className="image-item relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Dark Overlay */}
                  <div className="overlay absolute inset-0 bg-black/60 transition-all duration-300"></div>

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-brand-400 font-semibold text-sm md:text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
