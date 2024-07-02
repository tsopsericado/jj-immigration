"use client";
import HeroSection from "@/components/molecules/heroSection";
import Layout from "@/components/templates/layout";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Blogue({}: Props) {
  return (
    <>
      <Layout>
        <HeroSection
          content={"Blogue"}
          bgImage={
            "https://b2362590.smushcdn.com/2362590/wp-content/uploads/2021/06/entete-blogue_new.png?lossy=1&strip=1&webp=1"
          }
        />
        <div className="w-[70%] mx-auto my-6 flex gap-4">
          <figure>
            <Image
              src={"/assets/images/Un-blogue.png"}
              height={400}
              width={500}
              alt="new blog"
            />
          </figure>
          <div className="leading-loose ">
            <p className="font-bold text-sm text-[#666666] ">Dernière publication</p>
            <small className=" p-1 font-semibold">2024-06-20</small>
            <h1 className="text-3xl font-bold text-primary-color">Bienvenu au Canada</h1>
          </div>
        </div>
      </Layout>
    </>
  );
}
