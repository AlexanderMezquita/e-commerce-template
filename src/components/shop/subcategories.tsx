import { GetSubcategories } from "@/app/shop/actions";

export type SubcategoriesListProps = {
  category: string;
};
export default async function Subcategories(props: SubcategoriesListProps) {
  const subcategories = await GetSubcategories(props.category);

  return (
    <ul className="flex flex-col space-y-4">
      {subcategories.map((category) => (
        <li
<<<<<<< HEAD
          key={category.name}
=======
          key={category.id}
>>>>>>> efaffa6bc6dfb0895e3d998b70ca8b2b268f4777
          className=" text-sm text-grey-custom/70 hover:text-primary/80 hover:cursor-pointer "
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
