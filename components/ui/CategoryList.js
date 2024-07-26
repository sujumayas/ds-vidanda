import Link from 'next/link'

export default function CategoryList() {
  const categories = [
    'Ahorro Packs',
    'Carnes, Aves y Pescados',
    'Frutas y Verduras',
    'Congelados',
    'Lácteos y Huevos',
    'Quesos y Fiambres',
    'Abarrotes',
    'Desayunos',
    'Panadería y Pastelería'
  ]

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-red-500 flex items-center justify-between">
              {category}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}