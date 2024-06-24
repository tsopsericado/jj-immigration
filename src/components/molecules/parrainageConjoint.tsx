import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";

type Props = {};

export default function ParrainageConjoint({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold py-4 text-3xl text-primary-color text-center md:w-[75%] w-full mx-auto">
          Parrainer votre époux, conjoint de fait ou enfant à charge
        </h1>
        {/* <p className="font-bold py-4 text-[#666666]">
          Immigrer au Canada dans le cadre d'entrée express
        </p> */}
        {/* <div className="flex text-sm gap-3">
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
        </div> */}
      </div>
      <div className="md:flex block gap-3 w-[95%] md:w-[70%] mx-auto">
        <div className="w-[95%] md:w-[70%] mx-auto my-6 border-2 border-gray-400 px-4">
          <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
            Qui pouvez vous parrainer?
          </h1>
          <div>
            <p className="text-sm pb-4 text-[#666666] ">
              Vous pouvez parrainer votre époux, conjoint de fait et vos enfants
              à charge pour qu'ils deviennent résidents permanents du Canada.
              <br></br>
              <ol className="list-decimal leading-loose ml-6 font-semibold text-[#666666]">
                <li>Votre époux</li>
                <p>Votre epoux peut être de n'import quel sexe et doit:</p>
                <ul>
                  <li>Etre légalement marié avec vous</li>
                  <li>Avoir au moins 18 ans</li>
                </ul>
                <li>Votre conjoint de fait</li>
                <ul>
                  <li>N'est pas légalement marié avec vous</li>
                  <li>Est âgé d'au moins 18 ans</li>
                  <li>
                    Vit avec vous depuis au moins 12 mois consécutifs. Toute
                    période de separation doit
                  </li>
                </ul>
                <li>Enfant à charge:</li>
                <ul>
                  <li>Ils ont moins de 22 ans</li>
                  <li>Ils n'ont pas d'époux ou de conjoint de fait.</li>
                </ul>
              </ol>
              <p className="font-semibold italic pt-3 text-primary-color">
                Important: Vous ne pouvez pas parrainer une personne qui
                interdite de territoire au Canada, car elle n'est pas authorisé
                a entrer au Canada
                <br></br>
                Ne laissez rien au hasard a ce stade crucial.
              </p>
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
