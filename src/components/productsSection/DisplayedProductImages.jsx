
export default function DisplayedProductImages({mainImage, otherImages = [], title, setCurrentImage}) {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-7.5">
                        {/* other images */}
                        <div className="flex flex-row md:flex-col gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                otherImages[index] ? (
                                    <div key={index} onClick={() => setCurrentImage(otherImages[index])} className={`w-full md:w-42.5 h-full md:h-34.5 aspect-square md:aspect-auto bg-gray-100 fcenter rounded-sm p-3 cursor-pointer transition ${mainImage === otherImages[index] ? "border-2 border-s-red" : ""}`}>
                                        <img src={`/images/products/${otherImages[index]}`} alt={`Image ${title} ${index}`} className="max-h-full" />
                                    </div>
                                ) : (
                                    <div key={index} className="w-42.5 h-34.5 bg-gray-100 fcenter rounded-sm p-3 cursor-not-allowed">
                                        <span className="text-gray-500">No Image</span>
                                    </div>
                                )
                            ))}
                        </div>
                        {/* main image */}
                        <div className="w-full md:w-125 h-150 bg-gray-100 fcenter rounded-sm p-6">
                            <img className="max-h-full"
                                src={`/images/products/${mainImage}`}
                                alt={title}
                            />
                        </div>
                    </div>
    )
}