"use client";
import HeroSection from "@/components/molecules/heroSection";
import Layout from "@/components/templates/layout";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Layout>
        <HeroSection content={"à propos"} bgImage={"https://harmonyvisas.com/images/why_choose_us_img.jpg"} />
      </Layout>
    </>
  );
}
