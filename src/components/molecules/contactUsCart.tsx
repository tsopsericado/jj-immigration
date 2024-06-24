import Link from "next/link";
import React from "react";

type Props = {};

export default function ContactUsCart({}: Props) {
  return (
    <div
      className="small-contactUs-cart h-[300px] w-[350px] mb-6 py-3"
    >
      <h1 className="font-semibold w-[200px] text-text-color pl-5 text-3xl">
        Besoin de notre aide
      </h1>

      <button className="contact-us-btn flex
       justify-center mx-auto bottom-[-120px]">
        <Link href="/contact-us">Contacter nous</Link>
      </button>
    </div>
  );
}
