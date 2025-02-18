export default function DisplayedProductImagesPlaceholder() {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-7.5">
                        {/* other images */}
                        <div className="flex flex-row md:flex-col gap-4">
                            <div className="w-full md:w-42.5 h-full md:h-34.5 aspect-square md:aspect-auto bg-gray-100 fcenter rounded-sm p-3 cursor-not-allowed transition"><span className="text-gray-500"></span></div>
                            <div className="w-full md:w-42.5 h-full md:h-34.5 aspect-square md:aspect-auto bg-gray-100 fcenter rounded-sm p-3 cursor-not-allowed transition"><span className="text-gray-500"></span></div>
                            <div className="w-full md:w-42.5 h-full md:h-34.5 aspect-square md:aspect-auto bg-gray-100 fcenter rounded-sm p-3 cursor-not-allowed transition"><span className="text-gray-500"></span></div>
                            <div className="w-full md:w-42.5 h-full md:h-34.5 aspect-square md:aspect-auto bg-gray-100 fcenter rounded-sm p-3 cursor-not-allowed transition"><span className="text-gray-500"></span></div>
                        </div>
                        {/* main image */}
                        <div className="w-full md:w-125 h-150 bg-gray-100 fcenter rounded-sm p-6">
                            <span className="max-h-full"></span>
                        </div>
                    </div>
    )
}