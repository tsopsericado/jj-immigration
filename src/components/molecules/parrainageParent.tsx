import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";

type Props = {};

export default function ParrainageParent({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[75%] w-full mx-auto">
          Parrainer vos parents ou grands-parents
        </h1>
        {/* <p className="font-bold py-4 text-[#666666]">
          Immigrer au canada dans le cadre des programmes Québec: Programme de
          l'experience Québécoise (PEQ - travailleur)
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Programme de l'expérience Québécoise (PEQ- Travailleur) s'adresse au
            travailleur étranger temporaire pour l'obtention du certificat de
            sélection du Québec (CSQ) dans le but de s'établir au Québec de
            façon permanente.
          </p>
        </div> */}
        {/* <div className="flex text-sm gap-3">
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
            Pour parrainer vos parents ou grands-parents, si vous:
          </h1>
          <div>
            <div className="text-sm pb-4 text-[#666666] ">
              <ul className="list-decimal leading-loose ml-6 font-semibold text-[#666666]">
                <li>Etes âgé de 18 ans ou plus;</li>
                <li>
                  Etes citoyen candien, indien inscrit ou résident permanent;
                </li>
                <li>Vivez au Canada;</li>
                <li>
                  Signez un engagement promettant de répondre aux besoins
                  fondamentaux de la personne parrainée;
                </li>
                <li>
                  Signez un accord avec la personne que vous parrainez qui
                  confirme que chacun de vous comprend vos obligations et vos
                  responsabilités mutuelles;
                </li>
                <li>
                  Prouver que vous avez suffisamment d'argent pour subvenir aux
                  besoins des personnes que vous souhaitez parrainer. Pour
                  démontrer que vous avez suffisamment d'argent, vous devez
                  fournir une preuve de révenu, vous pouvez avez avoir un
                  époux/épouse ou conjoint de fait cosignataire et combiner vos
                  revenus.
                </li>
              </ul>
              <br></br>
              <p className="font-semibold italic py-3 text-primary-color">
                Important: Vous ne pouvez pas parrainer une personne qui
                interdite de territoire au Canada, car elle n'est pas authorisé
                a entrer au Canada
                <br></br>
                Ne laissez rien au hasard a ce stade crucial.
              </p>
            </div>
          </div>
        </div>
        <div className="my-6 mx-auto w-fit">
          <ImmigrationService />
        </div>
      </div>
    </>
  );
}
