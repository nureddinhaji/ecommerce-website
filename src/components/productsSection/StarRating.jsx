import { t } from "i18next";

export default function StarRating({ rate, ratesCount, reviewText = false }) {
    const fullStars = Math.floor(rate); // Number of fully filled stars
    const partialStar = rate - fullStars; // Decimal part for partially filled star
    const emptyStars = 5 - Math.ceil(rate); // Number of empty stars

    return (
        <div className="flex items-center">
            {/* Render full stars */}
            {Array.from({ length: fullStars }).map((_, index) => (
                <svg key={`full-${index}`} className="w-5 h-5 text-[#FFAD33]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}

            {/* Render partially filled star */}
            {partialStar > 0 && (
                <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 text-black/25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div
                        className="absolute top-0 start-0 overflow-hidden"
                        style={{ width: `${partialStar * 100}%` }}
                    >
                        <svg className="w-5 h-5 text-[#FFAD33]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Render empty stars */}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <svg key={`empty-${index}`} className="w-5 h-5 text-black/25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}

            {/* Display the number of reviews */}
            <span className="text-sm text-black/50 font-semibold ms-1">({ratesCount} {reviewText && t("reviews")})</span>
        </div>
    );
}