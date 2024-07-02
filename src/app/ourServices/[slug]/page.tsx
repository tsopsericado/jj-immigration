"use client";
import AccueilEtIntegration from "@/components/molecules/accueilEtIntegration";
import DepotCandidature from "@/components/molecules/depotCandidature";
import HeroSection from "@/components/molecules/heroSection";
import OurServices from "@/components/molecules/ourServices";
import Recrutement from "@/components/molecules/recrutement";
import Layout from "@/components/templates/layout";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Subserices({}: Props) {
  const pathname = usePathname();
  return (
    <>
      <Layout>
        {pathname === "/ourServices/deposer-votre-demande" ? (
          <>
            <HeroSection
              content={"Déposer votre demande"}
              bgImage={
                "https://integrationemploi.com/wp-content/uploads/2019/10/ImmigrationCanada_Programme-Visa-permanent.jpg"
              }
            />
            <DepotCandidature />
          </>
        ) : pathname === "/ourServices/recrutement-a-l-international" ? (
          <>
            <HeroSection
              content={"Recrutement à l'international"}
              bgImage={
                "/assets/images/recrutement1.jpg"
              }
            />
            <Recrutement />
          </>
        ) : pathname === "/ourServices/accueil-et-integration" ? (
          <>
            <HeroSection
              content={"Accueil et intégration"}
              bgImage={"https://static.wixstatic.com/media/a7d137_b51f4f2623c64443945146a127e82c2d~mv2.jpg/v1/fill/w_640,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a7d137_b51f4f2623c64443945146a127e82c2d~mv2.jpg"}
            />
            <AccueilEtIntegration />
          </>
        ) : (
          <OurServices />
        )}
        
      </Layout>
    </>
  );
}
