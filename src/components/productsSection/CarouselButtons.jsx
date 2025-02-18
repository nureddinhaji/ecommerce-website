import { useTranslation } from "react-i18next";

export default function CarouselButtons({ next, previous, ...rest}) {

    const {i18n} = useTranslation();

    const { carouselState: { currentSlide } } = rest;

    return (
        <div className={`flex gap-2 absolute end-0 top-0 md:top-13 ${i18n.language === "ar" ? "flex-row-reverse" : ""}`}>
            <button className={`w-12 aspect-square fcenter text-black bg-gray-100 hover:bg-s-red hover:text-white rounded-full transition ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()} >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L4 12L11 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button onClick={() => next()} className="w-12 aspect-square fcenter text-black bg-gray-100 hover:bg-s-red hover:text-white rounded-full transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    )
}