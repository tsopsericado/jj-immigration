import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function mmigrationService({}: Props) {
  return (
    <>
      <div
        style={{
         
          // background:
          //   "linear-gradient(118deg; rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)",
        }}
        className="small-cart h-[300px] w-full mb-6 py-3"
      >
        <h1 className="font-semibold w-[200px] text-text-color pl-5 text-3xl">
          Services d'immigration règlementé
        </h1>
        {/* <div>
          <figure>
            <Image
              src="/assets/images/canadda-button.jpg"
              alt="canada button"
              width={100}
              height={100}
              loading="lazy"
            />
          </figure>
        </div> */}
        <button className="button flex justify-center mx-auto bottom-[-100px]">
          <Link href="/formulaire-devaluation">Formulaire d'évaluation</Link>
        </button>
      </div>
    </>
  );
}
