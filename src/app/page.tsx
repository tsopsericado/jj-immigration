"use client"
import CategorySection from "@/components/molecules/categorySection";
import LandingHero from "@/components/molecules/landinghero";
import LatestArticles from "@/components/molecules/latestArticle";
import WhyUs from "@/components/molecules/why-us";
import { Slider } from "@/components/section/Slider";
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
          <WhyUs />
          <div className="relative">
            <CategorySection />
            <div className="absolute top-0 right-0">
              <img src="/assets/images/plus-group.png" alt="blob background shape" />
            </div>
          </div>
          <TestimonialSection />
          <div className="lg:pb-20 md:pb-7">
            <div className="pb-10">
              <p className="text-lightGray text-2xl  text-center pb-5">
                Notre Equipe
              </p>
              <p className="volkhov text-5xl text-title text-center">
                A votre te disposition 24h/24.</p>
            </div>
            <Slider />
            <LatestArticles />
          </div>
        </div>
      </Layout>
    </main >
  );
}