"use client";
import Cec from "@/components/molecules/cec";
import Citoyenneté from "@/components/molecules/citoyenneter";
import HeroSection from "@/components/molecules/heroSection";
import ParrainageConjoint from "@/components/molecules/parrainageConjoint";
import ParrainageParent from "@/components/molecules/parrainageParent";
import Pcp from "@/components/molecules/pcp";
import Peq from "@/components/molecules/peq";
import Prtq from "@/components/molecules/prtq";
import Tqf from "@/components/molecules/tqf";
import Layout from "@/components/templates/layout";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  const pathname = usePathname();
  return (
    <>
      <Layout>
        <HeroSection
          content={"Immigration"}
          bgImage={
            "https://www.immilawglobal.com/uploads/media/Caregivers65324b0f96461.webp"
          }
        />
        {pathname ===
        "/immigration/entree-express-travailleur-qualifier-federal-tqf" ? (
          <Tqf />
        ) : pathname ===
          "/immigration/entree-express-categorie-de-l-experience-cec" ? (
          <Cec />
        ) : pathname === "/immigration/programme-du-quebec-peq" ? (
          <Peq />
        ) : pathname ===
          "/immigration/programme-regulier-des-travailleurs-du-quebec-prtq" ? (
          <Prtq />
        ) : pathname ===
          "/immigration/programme-des-candidats-des-provinces-pcp" ? (
          <Pcp />
        ) : pathname ===
          "/immigration/parrainer-votre-epoux-conjoint-de-fait-ou-enfant-a-charge" ? (
          <ParrainageConjoint />
        ) : pathname ===
          "/immigration/parrainer-vos-parents-ou-vos-grand-parents" ? (
          <ParrainageParent />
        ) : pathname === "/immigration/citoyennete" ? (
          <Citoyenneté />
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}
