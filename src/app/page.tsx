"use client"
import CategorySection from "@/components/molecules/categorySection";
import LandingHero from "@/components/molecules/landinghero";
import { Slider } from "@/components/section/Slider";
// import Testimoni from "@/components/section/Testimoni";
import TestimonialSection from "@/components/section/TestimonialSection";
import Layout from "@/components/templates/layout";
import { useRouter } from "next/navigation";
import React from "react";
export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      {/* <button
        onClick={() => router.push("./formulaire-devaluation")}
        className="bg-[#E7151D] text-white py-3 px-4 active:translate-y-1 flex gap-2 rounded-lg "
      >
        <FaUserEdit size={25} />
        FORMULAIRE D'EVALUATION
      </button> */}
      <Layout>
        <div className="px-4 flex flex-col gap-[7.69rem]  md:px-[9rem]">
          <LandingHero />
          <div className="absolute top-0 right-0 -z-10">
            <img src="/assets/images/blob-shape.png" alt="blob background shape" />
          </div>
          <div className="absolute top-0 left-0 -z-10">
            <img
              src="/assets/images/top-left-gradient.png"
              alt="blob background shape"
            />
          </div>
          <div className="relative">
            <CategorySection />
            <div className="absolute top-0 right-0">
              <img src="/assets/images/plus-group.png" alt="blob background shape" />
            </div>
          </div>
          <TestimonialSection />
          {/* <Testimoni /> */}
          <Slider />
        </div>



      </Layout>
    </main>
  );
}