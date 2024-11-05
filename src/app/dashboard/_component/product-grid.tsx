import ProductCard from "./product-card";

export type ProductType = {
  id: string;
  name: string;
  url: string;
  description?: string | null;
};

const ProductGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
