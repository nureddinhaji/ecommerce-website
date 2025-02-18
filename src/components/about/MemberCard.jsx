
export default function MemberCard({image, name, profession, links}) {
    return (
        <div className="flex flex-col gap-8">
            <div className="bg-gray-100 rounded-sm overflow-hidden pt-10 px-6 max-w-[370px] max-h-[430px] ">
            <img className="object-cover object-top" src={image} alt={name}/>
            </div>
            <div>
                <h2 className="font-medium text-[32px]">{name}</h2>
                <p>{profession}</p>
                <div className="flex gap-4 mt-4">
                    {
                        links.map((link, index) => {
                            return (
                                <a className="w-6 h-6 fcenter" href={link} key={index}>
                                    {
                                        link.name === "x" ? (<><svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.8"><path fill="currentColor" fillRule="nonzero" d="M403 0h79L310 196l202 267H354L230 301 89 463H10l184-210L0 0h162l112 148L403 0zm-27 416h43L138 45H92l284 371z"/></svg><span className="hidden">Twitter</span></>) : link.name === "instagram" ? (<><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 1H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M15.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"/></svg><span className="hidden">Instagram</span></>) : link.name === "linkedin" ? (<><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z" fill="currentColor"/>
                                            </svg><span className="hidden">Linkedin</span></>) : ("")
                                    }
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}