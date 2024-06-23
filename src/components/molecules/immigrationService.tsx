import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function ImmigrationService({}: Props) {
  return (
    <>
      <div
        className="small-cart h-[300px] w-[350px] mb-6 py-3"
      >
        <h1 className="font-semibold w-[200px] text-text-color pl-5 text-3xl">
          Services d'immigration règlementé
        </h1>
        <p className="text-text-color text-xs w-[80%] mx-auto text-center font-semibold  mt-14">Faites nous parvenir votre dossier pour une évaluation sans engagement. Cliquer ici</p>
        <button className="buttonn flex justify-center mx-auto bottom-[-10px]">
          <Link href="/formulaire-devaluation">Formulaire d'évaluation</Link>
        </button>
      </div>
    </>
  );
}
