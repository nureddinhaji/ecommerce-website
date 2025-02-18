import { useEffect, useRef } from "react";

export default function GoTopButton() {

    const buttonRef = useRef(null);

    // Function to handle page scroll to show or hide the button
    function handleScroll() {
        if (buttonRef.current) {
            if (window.scrollY > 250) {
                buttonRef.current.classList.remove("!hidden");
            } else {
                buttonRef.current.classList.add("!hidden");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Function to handle button click
    function handleButtonClick() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button ref={buttonRef} onClick={handleButtonClick} className="!hidden w-11.5 aspect-square rounded-full fcenter fixed bottom-5 end-5 text-black bg-gray-100 transition hover:bg-s-red hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20V4M5 11L12 4L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}
