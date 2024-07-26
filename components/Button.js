export default function Button({ children, variant = 'primary', disabled = false, onClick, fullWidth = false }) {
    const baseStyles = "px-4 py-2 rounded-md font-semibold transition-colors duration-200 ease-in-out"
    const variants = {
      primary: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
    }
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }