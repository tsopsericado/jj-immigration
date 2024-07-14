import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function Peq({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[75%] w-full mx-auto">
          Immigrer au canada Programme de l'expérience québécoise (peq -
          travailleur)
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Immigrer au canada dans le cadre des programmes Québec: Programme de
          l'experience Québécoise (PEQ - travailleur)
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Programme de l’expérience Québécoise (PEQ- Travailleur) s’adresse au
            travailleur étranger temporaire pour l’obtention du certificat de
            sélection du Québec (CSQ) dans le but de s’établir au Québec de
            façon permanente.
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
        <div className="w-[95%] md:w-[70%] mx-auto my-6 border-2 border-gray-400 px-4">
          <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
            Admissibilité
          </h1>
          <div>
            <p className="text-sm pb-4 text-[#666666] ">
              Les exigence minimales pour être admissible à la categorie de
              l'expérinece canadiene, il faut remplir toutes les exigences
              minimales concernant:
            </p>
            <br></br>
            <ol className="list-disc ml-6 font-semibold text-[#666666]">
              <li>
                Avoir l’intention de s’établir au Québec pour y occuper un
                emploi dans une entreprise sur laquelle vous n’exercez pas un
                contrôle juridique ou de fait, directement ou indirectement. Cet
                emploi ne doit pas être dans un secteur inadmissible;
              </li>
              <li>Avoir 18 ans ou plus</li>
              <li>
                Avoir une connaissance du français oral qui équivaut au niveau 7
              </li>
              <li>
                Être légalement au Québec lorsque vous présentez votre demande
              </li>
              <li>Démontrer votre capacité d’autonomie financière.</li>
            </ol>
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
