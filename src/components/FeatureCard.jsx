export default function FeatureCard({ iconImg, title, description }) {
  return (
    <div className="bg-dark w-full max-w-[245px] min-h-[280px] rounded-[20px] flex flex-col items-center p-6 text-center relative cursor-pointer hover:shadow-lg hover:scale-105 transition">
      {/* Image/icon above the purple line */}
      {iconImg && (
        <div className="mb-4 flex justify-center gap-2 flex-wrap">
          {Array.isArray(iconImg) ? (
            iconImg.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Feature icon ${index}`}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            ))
          ) : (
            <img src={iconImg} alt="Feature icon" className="w-16 h-16 sm:w-20 sm:h-20" />
          )}
        </div>
      )}

      <h3 className="text-white font-inder text-lg sm:text-xl">{title}</h3>
      <hr className="border-brand w-24 sm:w-40 my-4" />
      <p className="text-graytext font-inder text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
