// app/page.tsx
import { Product } from "@/Types/product.type";
import GetAllProducts from "../apis/GetAllProducts";
import CategorySlider from "./_components/CategorySlider/CategorySlider";
import MainSlider from "./_components/MainSlider/MainSlider";
import DynamicSearch from "./_components/DynamicSearch/DynamicSearch";

export default async function Home() {
  const products: Product[] = await GetAllProducts();

  return (
    <section className="px-5 md:px-0 my-10 w-[70%] ms:w-full mx-auto">
      <MainSlider />
      <CategorySlider />
      
      {/* Client-side search component */}
      <DynamicSearch products={products} />
    </section>
  );
}
