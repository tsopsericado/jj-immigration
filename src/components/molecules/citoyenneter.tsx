import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";

type Props = {};

export default function Citoyenneté({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[80%] w-full mx-auto">
          demande de citoyenneté canadienne
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Nous simplifions pour vous, le processus de demande de citoyenneté
        </p>
      </div>
      <div className="md:flex block gap-3 w-[95%] md:w-[70%] mx-auto">
        <div className="w-[95%] md:w-[70%] mx-auto my-6 border-2 border-gray-400 px-4">
          <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
            Admissibilité
          </h1>
          <div>
            <p className="text-sm pb-4 text-[#666666] ">
              Pour devenir citoyenne canadien, vous devez:
              <br></br>
              <ul className="list-disc leading-loose ml-6 font-semibuld text-[#666666]">
                <li>être résident permanent;</li>
                <li>
                  avoir habiter au Canada pendant au moins 3 des 5 dernières
                  années;
                </li>
                <li>
                  avoir produit votre déclaration de revenus, si vous étiez de
                  le faire;
                </li>
                <li>prouver vos compétences linguistiques;</li>
                <li>
                  réussir un examen pour la citoyenneté, si vous avez entre 18
                  et 54 ans;
                </li>
                <li>prêter le serment de citoyenneté.</li>
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
