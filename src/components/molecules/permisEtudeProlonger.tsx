import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function PermisEtudeProlonger({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-40 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[90%] w-full mx-auto ">
          PROLONGATION DE PERMIS D'ÉTUDE
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Nous simplifions pour vous, le processus de demande de prolongation de
          permis d'étude au Canada.
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Nous simplifions pour vous, le processus de demande de prolongation
            de permis d'études au Canada. Nous vous conseillons de soumettre
            votre demande de renouvellement au moins 30 jours avant l'expiration
            de votre permis actuel.
          </p>
        </div>
      </div>
      <div className="md:flex block gap-3 w-[95%] md:w-[75%] mx-auto">
        <div className="w-full">
          <div className="w-[95%] md:w-full h-fit mx-auto pb-5 my-6 border-2 border-gray-400 px-4">
            <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
              PUIS-JE TRAVAILLER AU CANADA EN TANT QU'ÉTUDIANT ÉTRANGER SANS
              PERMIS DE TRAVAIL?
            </h1>
            <div className="text-sm pb-4 text-[#666666] ">
              <span className="font-bold">Oui</span>. Si vous avez un permis
              d'études et que vous êtes inscrit à temps plein dans un programme
              de formation générale, professionnelle ou technique dans un
              établissement d'enseignement désigné, vous pouvez travailler sur
              le campus sans permis de travail. Votre permis d'études précisera
              si vous pouvez travailler hors campus. Si c'est le cas, vous
              pourrez travailler un maximum de 20 heures par semaine pendant une
              session de votre programme d'études; et à temps plein pendant les
              congés prévus au calendrier scolaire.
            </div>
          </div>
          <div className="w-[95%] md:w-full h-fit mx-auto pb-5 my-6 border-2 border-gray-400 px-4">
            <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
              EST-CE QUE JE PEUX TRAVAILLER AU CANADA APRÈS L'OBTENTION DE MON
              DIPLÔME?
            </h1>
            <div className="text-sm pb-4 text-[#666666] ">
              Pour travailler au Canada après l'obtention de votre diplôme, vous
              avez besoin d'un permis de travail.
              <br></br>
              Les personnes qui obtiennent
              leur diplôme de certains établissements d'enseignement désignés
              sont admissibles à un permis de travail post-diplôme (PTPD).
              <br></br>
              L'expérience professionnelle acquise au Canada pourrait vous
              rendre éligible pour demander la résidence permanente.
              <br></br>
              À compter
              du 15 février 2024, les programmes de maîtrise d'une durée de
              moins de 2 ans (minimum de 8 mois) pourront donner lieu à
              l'obtention d'un PTPD d'une durée de 3 ans. La période de validité
              de votre PTPD dépend du niveau de votre programme d'études, de sa
              durée, ou de la date d'expiration de votre passeport, selon la
              première éventualité.
            </div>
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
