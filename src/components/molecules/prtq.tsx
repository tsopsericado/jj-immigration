import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";

type Props = {};

export default function Prtq({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[75%] w-full mx-auto">
          Immigrer au canada Programme régulier des travailleurs qualifiés du québec - (PRTQ)
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Immigrer au canada dans le cadre des programmes du Québec: Programme Regulier des travailleurs qualifiés du Québec - PRTQ
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
          Programme Régulier des Travailleurs Qualifiés du Québec s'adresse aux personnes qui souhaitent immigrer au Québec comme travailleur qualifié, à partir du Québec ou depuis l'étranger pour l'obtention du certificat de sélection du Québec (CSQ) dans le but de s'établir au Québec de façon permanente.
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
              Dans ce programme, vous devez déclarer votre intérêt à immigrer au
              Québec pour y travailler. Si votre profil correspond aux critères
              recherchés au Québec, vous recevrez une invitation à présenter une
              demande de sélection permanente.
              <br></br>
              Pour faire partie des personnes sélectionnées, vous devez avoir
              une formation et des compétences professionnelles qui faciliteront
              votre insertion en emploi au Québec.
              <br></br>
              D'autres facteurs sont pris en compte, comme :
              <ul className="list-disc leading-loose ml-6 font-semibold text-[#666666]">
                <li>Vos connaissances linguistiques</li>
                <li>Vos études et votre domaine de formation</li>
                <li>Votre âge</li>
                <li>Les caractéristiques de votre conjoint</li>
                <li>La présence d'enfants</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="my-6 mx-auto w-fit">
          <ImmigrationService />
        </div>
      </div>
    </>
  );
}
