"use client";
import HeroSection from "@/components/molecules/heroSection";
import VisaVisiteur from "@/components/molecules/visaVisiteur";
import VisaVisiteurParents from "@/components/molecules/visaVisiteurParents";
import Layout from "@/components/templates/layout";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  const pathname = usePathname();
  return (
    <>
      <Layout>
        {pathname === "/visiter/visa-visiteur-au-canada" ? (
          <>
            <HeroSection
              content={"Visa visiteur"}
              bgImage={
                "https://immigrantquebec.com/fr/wp-content/uploads/2022/01/bc0c90f7-7403-4b18-97a0-2d2adca309a9-768x323.jpg"
              }
            />
            <VisaVisiteur />
          </>
        ) : pathname ===
          "/visiter/super-visa-pour-les-parents-ou-grand-parents" ? (
          <>
            <HeroSection
              content={"Visa visiteur pour parents"}
              bgImage={
                "https://www.tourismorama.com/wp-content/uploads/2021/07/voyage-canada-destinations-a-visiter.jpg"
              }
            />
            <VisaVisiteurParents />
          </>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}
