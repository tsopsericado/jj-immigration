"use client";
import HeroSection from "@/components/molecules/heroSection";
import PermiEtude from "@/components/molecules/permisEtude";
import PermisEtudeProlonger from "@/components/molecules/permisEtudeProlonger";
import Layout from "@/components/templates/layout";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  const pathname = usePathname();

  return (
    <>
      <Layout>
        {pathname === "/etude/permis-d-etude" ? (
          <>
            <HeroSection
              content={"Permis d'etude"}
              linearGradient="linear-gradient(256deg, #1a1a1b93, #29292b79)"
              bgImage={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJl4cFxa0Hpvv6ozIRhNWXdWkqrPiS9Qtkix2GCYDP6hNz1NHIZf7Q-zTy5Yy4fL0y3I&usqp=CAU"
              }
            />
            <PermiEtude />
          </>
        ) : (
          <>
            <HeroSection
              content={"prologation de Permis d'etude"}
              linearGradient="linear-gradient(256deg, #1a1a1b93, #29292b79)"
              bgImage={
                "https://i0.wp.com/goniyo.com/wp-content/uploads/2023/07/Requirements-for-Canada-Student-Visa-1.webp?fit=1500%2C500&ssl=1"
              }
            />
            <PermisEtudeProlonger />
          </>
        )}
      </Layout>
    </>
  );
}
