import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function Tqf({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[75%] w-full mx-auto">
          Immigrer au canada travailleurs qualifiés fédéral (TQF)
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Immigrer au Canada dans le cadre d'entrée express
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Le programme des travailleurs qualifiés (fédéral) s'adresse aux
            travailleurs qualifiés qui ont une expérience de travail et qui
            souhaitent immigrer au Canada et devenir des résidents permanants du
            Canada.
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
              Les exigences minimales pour être admissible au programme des
              travailleurs qualifiés (fédéral), il faut remplir toutes les
              exigences minimales concernant:
            </p>
            <br></br>
            <ol className="list-decimal leading-loose py-3 ml-6 font-semibold text-[#666666]">
              <li>L'âge</li>
              <li>Les études</li>
              <li>L'epérience de travail qualifié au Canada</li>
              <li>Les compétences linquistique en français ou en anglais</li>
              <li>Si vous avez ou non une offre d'emploi valide</li>
              <li>
                Province de deestination (prévoir habiter à l'extérieur de la
                province du Québec)
              </li>
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
