import Layout from '../components/layout/Layout'
import ProductList from '../components/product/ProductList'

export default function Home() {
  // In a real application, you would fetch products from an API
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <ProductList products={products} />
    </Layout>
  )
}