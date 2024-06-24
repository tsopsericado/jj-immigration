"use client";
import HeroSection from "@/components/molecules/heroSection";
import Layout from "@/components/templates/layout";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Layout>
        <HeroSection
          content={"Visiter"}
          linearGradient="linear-gradient(256deg, #1a1a1b93, #29292b79)"
          bgImage={
            "https://www.tourismorama.com/wp-content/uploads/2021/07/voyage-canada-destinations-a-visiter.jpg"
          }
        />
      </Layout>
    </>
  );
}
