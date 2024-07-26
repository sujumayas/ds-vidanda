import Link from 'next/link'
import Logo from '../ui/Logo'
import SearchBar from '../ui/SearchBar'
import CategoryMenu from '../ui/CategoryMenu'

export default function Header() {
  return (
    <header className="bg-red-700 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-2xl font-bold">plazavea</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/supermercado" className="hover:underline">Supermercado</Link>
            <Link href="/electro-hogar" className="hover:underline">Electro y Hogar</Link>
          </nav>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <SearchBar />
          <div className="flex items-center">
            <button className="ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-800">
        <div className="container mx-auto px-4 py-2">
          <CategoryMenu />
        </div>
      </div>
    </header>
  )
}