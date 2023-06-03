'use server';
import prisma from '@/lib/prisma'


export async function GetSubcategories(category: string) {
    const subcategories = await prisma.subcategories.findMany({
        // where: {
        //     categoryId: category
        // }
    })
    return subcategories;
}

export async function GetProducts() {
    const products = await prisma.products.findMany({ take: 2 });
    return products;
}