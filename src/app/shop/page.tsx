import Offer from "@/components/navbar/offer";
import ProductItem from "@/components/shop/product-item";
import Subcategories from "@/components/shop/subcategories";
import { GetProducts } from "./actions";

export default async function Shop() {
  const products = await GetProducts();

  return (
    <main>
      <Offer />
      <div className="main-container grid grid-cols-12">
        <aside className="md:block md:col-span-2 hidden">
          {/* @ts-expect-error Server Component */}
          <Subcategories category="d527da3e-a843-4df9-8017-8de53842a6d6" />
        </aside>
        <section className="col-span-8 grid grid-cols-4">
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}
