import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function VisaVisiteur({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-40 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[90%] w-full mx-auto ">
          Visa visiteur au Canada
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Nous simplifions pour vous, le processus de demande de visa visiteur
          au Canada.
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Si vous êtes citoyen d"un pays nécessitant un visa vous devrez faire
            une demande de visa de visiteur (aussi appelé visa de résident
            temporaire), c"est un document officiel qu"IRCC appose dans votre
            passeport. Il indique que vous satisfaites aux exigences nécessaires
            pour voyager au Canada.
          </p>
        </div>
        <div className="flex text-sm gap-3">
          <div className="mb-1">
            <FaCheckCircle className="text-primary-color" size={15} />
          </div>
          <p className="text-[#666666]">
            Ne laissez rien au hasard à ce stade crucial. Faites nous parvenir
            votre dossier pour une évaluation sans engagement.
          </p>
        </div>
      </div>
      <div className="md:flex block gap-3 w-[95%] md:w-[70%] mx-auto">
        <div className="w-[95%] md:w-[70%] h-fit mx-auto my-6 border-2 border-gray-400 px-4">
          <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
            ADMISSIBILITÉ À UN VISA VISITEUR AU CANADA?
          </h1>
          <div>
            <div className="text-sm pb-4 text-[#666666] ">
              Il faut satisfaire à certaines exigences de base afin d'obtenir un
              visa de visiteur :<br></br>
              <ul className="list-disc leading-loose ml-6 font-semibold text-[#666666]">
                <li>Posséder un titre de voyage valide, comme un passeport;</li>
                <li>Être en bonne santé;</li>
                <li>
                  Ne pas avoir été reconnu coupable d'activités criminelles ou
                  d'infractions liées à l'immigration;
                </li>
                <li>
                  Convaincre un agent d'immigration que vous retournerez dans
                  votre pays de résidence à cause de liens que vous y avez,
                  comme un emploi, une propriété, des actifs financiers ou de la
                  famille;
                </li>
                <li>
                  Convaincre un agent d'immigration que vous quitterez le Canada
                  à la fin de votre séjour;
                </li>
                <li>Avoir suffisamment d'argent pour votre séjour.</li>
              </ul>
            </div>
            <p className="text-[#666666] pb-5 font-semibold text-sm italic">
              Si vous n'obtenez pas de timbre dans votre passeport, vous pouvez
              rester pendant six mois (6 mois) à compter du jour où vous êtes
              entré au Canada ou jusqu'à l'expiration de votre passeport, selon
              la première de ces éventualités.
            </p>
          </div>
        </div>
        <div className="my-6 mx-auto w-fit">
          <ImmigrationService />
          <ContactUsCart />
        </div>
      </div>
    </>
  );
}
