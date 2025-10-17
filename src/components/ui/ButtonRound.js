export default function ButtonRound({ text, onClick, className = "" }) {
    return(
        <button 
            onClick={onClick}
            className={`px-8 py-2 lg:py-3 rounded-full border-2 border-krit-white font-blender font-bold text-base lg:text-lg text-krit-white ${className}`}
        >
            {text}
        </button>
    )
}