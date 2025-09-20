import GetAllCategories from '@/apis/GetAllCategories'
import { Category as ClientCategory } from '@/Types/category.type'
import { Category as ApiCategory } from '@/Types/product.type'
import CategoriesClient from '../_components/CategoriesClient/CategoriesClient'

const Categories = async () => {
  const { data }: { data: ApiCategory[] } = await GetAllCategories()

  const categories: ClientCategory[] = data.map(cat => ({
    _id: cat._id,
    name: cat.name,
    image: cat.image || "/placeholder.png",
    slug: cat.name.toLowerCase().replace(/\s+/g, "-"), // generate slug
    createdAt: new Date().toISOString(), // generate placeholder
    updatedAt: new Date().toISOString(), // generate placeholder
  }))

  return <CategoriesClient categories={categories} />
}

export default Categories
