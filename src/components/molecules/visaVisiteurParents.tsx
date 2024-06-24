import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function VisaVisiteurParents({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-40 pb-3 p-3 w-[95%] md:w-[65%] mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[90%] w-full mx-auto ">
          SUPER VISA - RESTEZ PLUS LONGTEMPS AVEC VOTRE FAMILLE
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Nous simplifions pour vous, le processus de demande de Super Visa au
          Canada.
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Le super visa vous permet de rendre visite à vos enfants et
            petits-enfants pour des périodes de 5 ans à la fois. Il s'agit d'un
            visa pour entrées multiples dont la durée de validité peut aller
            jusqu'à 10 ans.
          </p>
        </div>
      </div>
      <div className="md:flex block gap-3 w-[95%] md:w-[70%] mx-auto">
        <div className="w-[95%] h-fit md:w-[70%] mx-auto my-6 border-2 border-gray-400 px-4">
          <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
            ADMISSIBILITÉ À UN SUPER VISA LES PARENTS OU GRANDS-PARENTS AU
            CANADA?
          </h1>
          <div>
            <div className="text-sm pb-4 text-[#666666] ">
              Pour être admissible à un Super Visa, votre hôte doit répondre aux
              exigences suivantes:<br></br>
              <ul className="list-disc leading-loose ml-6 font-semibold text-[#666666]">
                <li>être votre enfant ou petit‑enfant,</li>
                <li>
                  être un citoyen canadien, un résident permanent du Canada ou
                  un Indien inscrit;
                </li>
                <li>être âgé d'au moins 18 ans et résider au Canada;</li>
                <li>
                  avoir un revenu égal ou supérieur au revenu vital minimum;
                </li>
                <li>
                  avoir une couverture d'assurance médicale canadienne valide
                  pendant au moins un an, et passer un examen médical;
                </li>
                <li>
                  avoir présenté votre demande de super visa depuis l'extérieur
                  du Canada.
                </li>
              </ul>
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
