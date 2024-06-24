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
          content={""}
          linearGradient="linear-gradient(256deg, #1a1a1b93, #29292b79)"
          bgImage={
            "https://softamo.org/wp-content/uploads/2023/11/study-in-canada.jpeg"
          }
        />
        <p>Etudes</p>
      </Layout>
    </>
  );
}
