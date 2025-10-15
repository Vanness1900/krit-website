export default function ButtonRound({ text, onClick, className = "" }) {
    return(
        <button 
            onClick={onClick}
            className={`px-12 py-2 lg:py-3 rounded-full border-2 border-krit-white font-blender font-bold text-xl lg:text-2xl text-krit-white hover:bg-krit hover:border-krit transition-colors ${className}`}
        >
            {text}
        </button>
    )
}