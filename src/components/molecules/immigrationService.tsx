import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function mmigrationService({}: Props) {
  return (
    <>
      <div
        className="small-cart h-[300px] w-full mb-6 py-3"
      >
        <h1 className="font-semibold w-[200px] text-text-color pl-5 text-3xl">
          Services d'immigration règlementé
        </h1>
        <button className="buttonn flex justify-center mx-auto bottom-[-100px]">
          <Link href="/formulaire-devaluation">Formulaire d'évaluation</Link>
        </button>
      </div>
    </>
  );
}
