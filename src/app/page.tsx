"use client";
import CategorySection from "@/components/molecules/categorySection";
import LandingHero from "@/components/molecules/landinghero";
import WhyUs from "@/components/molecules/why-us";
import ArticleRécent from "@/components/organisms/articleRécent";
import { Slider } from "@/components/section/Slider";
import TestimonialSection from "@/components/section/TestimonialSection";
import Layout from "@/components/templates/layout";
import { useRouter } from "next/navigation";
import React from "react";
export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      <Layout>
        <div className="px-2 flex flex-col gap-[5rem]  md:px-[9rem]">
          <LandingHero />
          <div className="absolute top-0 right-0 -z-10">
            <img
              src="/assets/images/blob-shape.png"
              alt="blob background shape"
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 left-0 -z-10">
            <img
              src="/assets/images/top-left-gradient.png"
              alt="blob background shape"
              loading="lazy"
            />
          </div>
          <WhyUs />
          <div className="relative">
            <CategorySection />
            <div className="absolute top-0 right-0">
              <img
                src="/assets/images/plus-group.png"
                alt="blob background shape"
              />
            </div>
          </div>
          <TestimonialSection />
          <div  className="lg:pb-14 md:pb-7">
            <div className="pb-10 bg-gray-50 py-8">
              <p className="text-5xl text-primary-color font-semibold text-center pb-5">
                Notre Equipe
              </p>
              <p className="volkhov text-2xl text-title text-center pb-10">
                A votre disposition 24h/24
              </p>
              <Slider />
            </div>
            
            <ArticleRécent/>
          </div>
        </div>
      </Layout>
    </main>
  );
}
