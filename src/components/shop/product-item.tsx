"use client";

import prisma from "@/lib/prisma";
import { products } from "@prisma/client";

import Image from "next/image";

export default function ProductItem({ product }: { product: products }) {
  return (
    <picture>
      <Image width={80} height={80} alt="landing image" src={"/"} />
    </picture>
  );
}
