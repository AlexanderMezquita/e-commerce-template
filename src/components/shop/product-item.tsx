"use client";

import prisma from "@/lib/prisma";
import { products } from "@prisma/client";

import Image from "next/image";

export default function ProductItem({ product }: { product: products }) {
  return (
    <div>
      {/* <source srcSet= /> */}
      <picture className="max-h-96">
        <Image
          // fill={true}
          width={320}
          height={300}
          alt="landing image"
          // className="object-cover"
          src={product.images[0].url}
        />
      </picture>
    </div>
  );
}
