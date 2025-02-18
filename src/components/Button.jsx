
export default function Button({moreClasses, type, width, background, text, children, onClick, disabled = false}) {
    return (
        <button disabled={disabled} onClick={onClick} type={type || "button"} className={`fcenter gap-4 ${width ? width : "w-fit"} py-4 px-12 ${background ? `${background} hover:${background}/90` : 'bg-s-red hover:bg-s-red/90'} ${disabled ? '!cursor-not-allowed opacity-80' : ''} transition ${text ? text : 'text-gray-50'} font-medium rounded-sm ${moreClasses}`}>{children}</button>
    )
}