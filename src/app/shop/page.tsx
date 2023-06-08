import Offer from "@/components/navbar/offer";
import Subcategories from "@/components/shop/subcategories";
import { GetProducts } from "./actions";

export default async function Shop() {
  const products = await GetProducts();

  return (
    <main>
      <Offer />
      <div className="main-container grid grid-cols-12">
        <aside className="md:block md:col-span-4 hidden">
          {/* @ts-expect-error Server Component */}
          <Subcategories category="d527da3e-a843-4df9-8017-8de53842a6d6" />
        </aside>

        <section>
          {products.map((product) => (
            <ul key={product.name}>
              <li>{product.name}</li>
            </ul>
          ))}
        </section>
      </div>
    </main>
  );
}
