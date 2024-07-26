import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl">
      <div className="relative">
        <select className="absolute left-0 top-0 h-full bg-white text-gray-700 rounded-l-md border-r border-gray-300 px-3 focus:outline-none">
          <option>Todas las categorías</option>
        </select>
        <input
          type="text"
          className="w-full pl-40 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Hola, ¿qué estás buscando?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full bg-red-500 text-white rounded-r-md px-4 hover:bg-red-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  )
}