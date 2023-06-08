import prisma from "@/lib/prisma";

export async function createProductAsyn() {
  const category = await prisma.categories.create({
    data: {
      name: "Jeans",
      description: "Jeans are cool",
    },
  });
  const subcategory = await prisma.subcategories.create({
    data: {
      name: "Pants",
      description: "Pants are necessary",
      categoryId: category.id,
    },
  });
  const product = await prisma.products.create({
    data: {
      name: "Blue Jeans",
      description: "blue jeans are the best",
      //  images: [],
      categoryId: category.id,
      subcategoryId: subcategory.id,
    },
  });
  const products = await prisma.products.findMany({
    include: { category: true },
  });
  //   console.log(products[0].category);
}
