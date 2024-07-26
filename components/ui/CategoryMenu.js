import Link from 'next/link'

export default function CategoryMenu() {
  return (
    <nav>
      <ul className="flex space-x-4 text-sm">
        <li>
          <Link href="/categories" className="flex items-center hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Compra por categorías
          </Link>
        </li>
      </ul>
    </nav>
  )
}