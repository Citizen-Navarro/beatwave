export default function FeatureCard({ iconImg, title, description }) {
  return (
    <div className="bg-dark w-[245px] h-[316px] rounded-[20px] flex flex-col items-center p-6 text-center relative">
      {/* Image/icon above the purple line */}
      {iconImg && (
        <div className="mb-4 flex justify-center gap-2">
          {Array.isArray(iconImg) ? (
            iconImg.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Feature icon ${index}`}
                className="w-20 h-20"
              />
            ))
          ) : (
            <img src={iconImg} alt="Feature icon" className="w-20 h-20" />
          )}
        </div>
      )}

      <h3 className="text-white font-inder text-[20px]">{title}</h3>
      <hr className="border-brand w-40 my-4" />
      <p className="text-graytext font-inder text-[12px] leading-[15px]">
        {description}
      </p>
    </div>
  );
}
