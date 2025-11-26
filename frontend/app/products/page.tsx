import ProductGrid from '@/components/ProductGrid'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Nos Produits</h1>
        <p className="text-gray-600">Découvrez notre collection complète</p>
      </div>
      <ProductGrid />
    </div>
  )
}
