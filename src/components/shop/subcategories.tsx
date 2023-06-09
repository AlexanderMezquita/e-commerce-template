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
          key={category.id}
          className=" text-sm text-grey-custom/70 hover:text-primary/80 hover:cursor-pointer "
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
