
import { Product } from "@/Types/product.type";
import GetAllProducts from "../apis/GetAllProducts";
import CategorySlider from "./_components/CategorySlider/CategorySlider";
import HomeCard from "./_components/HomeCard/HomeCard";
import MainSlider from "./_components/MainSlider/MainSlider";

export default async function Home() {

  const data:Product[] = await GetAllProducts()

  return (
    
    <section className="px-5 md:px-0 my-10 w-[70%] ms:w-full mx-auto">
      <MainSlider/> 
      <CategorySlider/>
      <div className="flex flex-wrap">
        {data.map((product:Product, idx:number) => (<HomeCard key={idx} product={product} />))}
      </div>
    </section>

    
  );
}
