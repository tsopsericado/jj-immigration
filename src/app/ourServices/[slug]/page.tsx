import HeroSection from "@/components/molecules/heroSection";
import Layout from "@/components/templates/layout";
import React from "react";

type Props = {};

export default function Subserices({}: Props) {
  return (
    <>
      <Layout>
        <HeroSection
          content={"Hero section"}
          bgImage={"/assets/images/about-us.jpg"}
        />
        <p>Services d'entreprise</p>
      </Layout>
    </>
  );
}
