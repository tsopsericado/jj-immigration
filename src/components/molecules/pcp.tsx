import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function Pcp({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-400 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[75%] w-full mx-auto">
          Immigrer au canada Programmes des candidats des provinces (PCP)
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Immigrer au canada dans le cadre des Programme des Candidats des
          Provinces - PCP
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Les Programmes des Candidats des Provinces (PCP) offrent aux
            différentes provinces et territoires du Canada la possibilité de
            choisir parmi les candidats à l’immigration qui expriment un intérêt
            spécifique pour leur province ou territoire. Chaque province et
            territoire, à l’exception du Nunavut, dispose de son propre PCP. Ces
            programmes sont le résultat d’accords entre les provinces et
            territoires participants et Immigration, Réfugiés et Citoyenneté
            Canada (IRCC), leur permettant de sélectionner des immigrants afin
            de répondre à leurs besoins spécifiques en main-d’oeuvre ou en
            entrepreneurs, favorisant ainsi leur intégration réussie.
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
            Admisibilité
          </h1>
          <div>
            <p className="text-[#666666] ">
              Il existe trois princeipales raisons pour lesquelles un candidat
              pourrait choissir de passer par les Programmes des Candidats des
              Provinces pour obtenir la residence permanente :
            </p>
            <ul className="list-decimal ml-6 font-semibold text-[#666666]">
              <li>
                S'il est dans le bassin Entrée Express mais ne cumule pas
                suffisamment de points pour recevoir une Invitation à Présenter
                une Demande (IPD). Une nomination provinciale lui accorderait
                600 points supplémentaires, lui garantissant automatiquement une
                IPD.
              </li>
              <li>
                S'il a reçu une offre d'emploi d'un employeur dans une province.
              </li>
              <li>
                S'il réside déjà temporairement dans une province en tant
                qu'étudiant ou travailleur, et est éligible à l'un des volets de
                nomination de cette province.
              </li>
            </ul>
            <p className="text-sm pb-4 text-[#666666] ">
              Découvrez les divers Programmes des Candidats des Provinces
              offerts dans chaque province et territoire, adaptés aux besoins
              spécifiques de chacun. En raison des variations des besoins,
              chaque province propose ses propres programmes distincts avec des
              critères spécifiques.
              <br></br>
              Explorez les différentes options disponibles selon la province ou
              le territoire
            </p>
            <ol className="list-decimal leading-loose ml-6 font-semibold text-[#666666]">
              <li>
                Ontario : Programme Ontarien des Candidats à l'Immigration
                (POCI)
              </li>
              <li>
                Colombie-Britannique : Programme des Candidats de la
                Colombie-Britannique (PCCB)
              </li>
              <li>Alberta : Programme d'Immigration Avantage Alberta (PIAA)</li>
              <li>Manitoba : Programme des Candidats du Manitoba (PCM)</li>
              <li>
                Nouvelle-Écosse : Programme des Candidats de la Nouvelle-Écosse
                (PCNE)
              </li>
              <li>
                Nouveau-Brunswick : Programme des Candidats du Nouveau-Brunswick
                (PCNB)
              </li>
              <li>
                Saskatchewan : Programme Candidats Immigrants pour la
                Saskatchewan (PCIS)
              </li>
              <li>
                Île-du-Prince-Édouard : Programme des Candidats de
                l'Île-du-Prince-Édouard (PC IPE)
              </li>
              <li>
                Terre-Neuve-et-Labrador : Programme des Candidats de la Province
                de Terre-Neuve-et- Labrador (PCPTNL)
              </li>
              <li>
                Territoires du Nord-Ouest : Programme des Candidats des
                Territoires du Nord-Ouest (PCTNO)
              </li>
              <li>Yukon : Programme des Candidats du Yukon (PCY)</li>
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
