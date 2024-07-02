"use client";
import ContactUsCart from "@/components/molecules/contactUsCart";
import HeroSection from "@/components/molecules/heroSection";
import ImmigrationService from "@/components/molecules/immigrationService";
import Layout from "@/components/templates/layout";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Layout>
        <HeroSection
          content={"à propos"}
          bgImage={"https://harmonyvisas.com/images/why_choose_us_img.jpg"}
        />
        <div className="py-6 block md:flex justify-between gap-2 w-[90%] md:w-[70%] mx-auto ">
          <div className="w-fit">
            <h1 className="font-semibold text-3xl py-3">Qui sommes nous.</h1>
            <p>
              <span className="text-primary-color italic">
                JJ-RECRUTEMENT INTERNATIONAL
              </span>{" "}
              est une entreprise de conseil en immigration dont la valeur
              essentielle est de fournire du soutien, des conseils et de
              l'accompagnement en matière d'immigration aux particulier et aux
              entreprises à travert un service professionnel, transparent et
              confidentiel. Nous nous engageons à offrir ue solution
              complementaire auxx entreprises au prise avec la pénerie de main
              d'oeuvre.
              <br></br>
              Notre solide équipe constituer des consultants réglementé en
              immigration canadienne et expert en gestion des resources humaines
              saura vous offrir des solutions spécifiques afin de répondre a vos
              besoins spécifiques.
            </p>
            <h1 className="font-semibold text-3xl py-3">Notre objectif.</h1>
            <p>
              Etablir une relation de qualité avec nos clients afin de les
              porter vers l'avenir professionnel souhaité.
            </p>
            <h1 className="font-semibold text-3xl py-3">Notre mission</h1>
            <p>
              Combler les besoins de main d'oeuvre des entreprises. Avec{" "}
              <span className="text-primary-color italic">
                JJ-RECRUTEMENT INTERNATIONAL{" "}
              </span>{" "}
              les entreprises économisent du temps requis dans la sélection des
              candidats, diminuent le risque d'embauche des travailleurs non
              qualifiés et vous fait bénéficier d'une garantie de remplacement.
            </p>
            <h1 className="font-semibold text-3xl py-3">Nos Valeurs.</h1>
            <ul className="list-disc">
              <li>
                Créer de la valeur aux entreprises grâce a un partenariat
                stratégique, percutant et innovant.
              </li>
              <li>
                Nous vous aidons à vous démarquer, afin de pouvoir marqué votre
                positionnement dans votree secteur d'activité. Pour ce faire,
                nous vous proposons des solutions novatrices. Nous misons sur
                notre authenticité. L'honnêteté est une priorité chez nous et
                votre satisfaction est notre défi.
              </li>
            </ul>
          </div>
          <div className="w-fit py-4 md:block gap-2">
            <ImmigrationService />
            <ContactUsCart />
          </div>
        </div>
      </Layout>
    </>
  );
}
