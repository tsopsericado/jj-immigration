import React from "react";
import ContactUsCart from "./contactUsCart";
import ImmigrationService from "./immigrationService";

type Props = {};

export default function Recrutement({ }: Props) {
  return (
    <div className="md:flex block gap-3 w-[95%] md:w-[80%] py-10 mx-auto">
      <div className="text-[#292828] leading-loose">
        <h1 className=" text-3xl font-semibold pb-3 text-primary-color">Connecter les talents</h1>
        <p>
          Nous avons choisi de vous proposer des candidats du Burkina Faso pour
          plusieurs raisons :
        </p>
        <ol className="list-decimal  ">
          <li className="font-semibold uppercase text-xl">La réputation</li>
          <p>
            La main d'oeuvre burkinabé est considéré comme étant la meilleure de
            l'Afrique par l'industrie canadienne des mines. Elle est réputé
            vaillante, qualifié et pourvu d'une attitude exemplaire.
          </p>
          <li className="font-semibold uppercase text-xl">La réputation</li>
          <p>
            L'extrême jeunesse de la population : une population jeune,
            dynamique et entreprenante, ainsi qu'une main-d'œuvre abondante et
            réputée travaillante. Malheureusement, cette jeunesse fait face à
            une pénurie d'emploi dans le pays.
          </p>
          <li className="font-semibold uppercase text-xl">Les valeurs</li>
          <p>
            Le citoyen burkinabè, reconnu pour être intègre, possède un bon sens
            des responsabilités et du respect de l'autorité. De plus, il est des
            plus fidèle à l'employeur et ne cherche pas à changer d'employeur.
          </p>
          <li className="font-semibold uppercase text-xl">La langue</li>
          <p>
            Un des objectifs visés par les gouvernements du Québec et du Canada
            est d'attirer des immigrants francophones. Tous les candidats
            Burkinabè reçoivent leur formation en français, ce qui facilite leur
            intégration dans le milieu du travail et au sein de la communauté.
          </p>
          <li className="font-semibold uppercase text-xl">
            La conpétence et +
          </li>
          <p>
            Le Burkina possède des centres de formation professionnelle de
            qualité. Ces centres utilisent la même technologie que la plupart
            des entreprises au Canada et engagent des formateurs de haut niveau.
            Nous nous engageons à vous présenter les meilleurs candidats issus
            de ces centres de formation.
            <br></br>
            Non seulement nos candidats sont bien formés, mais de plus ils
            disposent souvent de plusieurs années d'expérience.
          </p>
          <li className="font-semibold uppercase text-xl">La diversité</li>
          <p>
            Embaucher des Burkinabès, c'est encourager la diversité. C'est
            également permettre à votre organisation de profiter d'expériences
            et de perspectives variées, contribuant ainsi au développement de
            votre créativité et de votre innovation.
          </p>
        </ol>
      </div>
      <div className="my-6 mx-auto w-fit">
        <ImmigrationService />
        <ContactUsCart />
      </div>
    </div>
  );
}
