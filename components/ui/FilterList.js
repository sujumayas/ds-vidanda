import { useState } from 'react'

export default function FilterList() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedBrands, setSelectedBrands] = useState([])

  const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D']

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange]
    newPriceRange[index] = parseInt(e.target.value)
    setPriceRange(newPriceRange)
  }

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prevBrands =>
      prevBrands.includes(brand)
        ? prevBrands.filter(b => b !== brand)
        : [...prevBrands, brand]
    )
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-20 px-2 py-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-20 px-2 py-1 border rounded"
          />
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Brands</h3>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              id={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandToggle(brand)}
              className="mr-2"
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
    </div>
  )
}