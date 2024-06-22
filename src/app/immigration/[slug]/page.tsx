"use client";
import HeroSection from "@/components/molecules/heroSection";
import Tqf from "@/components/molecules/tqf";
import Layout from "@/components/templates/layout";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Layout>
        <HeroSection
          linearGradient="linear-gradient(256deg, #1a1a1b93, #29292b79)"
          content={"Immigration"}
          bgImage={
            "https://www.immilawglobal.com/uploads/media/Caregivers65324b0f96461.webp"
          }
        />
        <Tqf />
      </Layout>
    </>
  );
}
