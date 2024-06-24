import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function PermiEtude({}: Props) {
  return (
    <>
      <div className="px-10 border-gray-40 pb-3 p-3 w-[95%] md:w-1/2 mx-auto my-6 border-2">
        <h1 className="uppercase font-bold text-3xl text-primary-color text-center md:w-[90%] w-full mx-auto ">
          Permi d'étude
        </h1>
        <p className="font-bold py-4 text-[#666666]">
          Nous simplifions pour vous, le processus de demande de permis d'étude
          au Canada.
        </p>
        <div className="flex text-sm gap-3">
          <div>
            <FaCheckCircle className="text-primary-color my-auto" size={15} />
          </div>
          <p className="text-[#666666]">
            Le permis d'étude est un document essentiel pour les étudiants
            internationaux qui souhaitent poursuivre des études au Canada. Il
            vous permet de séjourner au Canada pendant la durée de vos études et
            offre la possibilité de travailler pendant et après vos études.
          </p>
        </div>
      </div>
      <div className="md:flex block gap-3 w-[95%] md:w-[75%] mx-auto">
        <div className="w-[95%] md:w-[70%] h-fit mx-auto my-6 border-2 border-gray-400 px-4">
          <h1 className="uppercase text-center py-5 text-primary-color font-bold text-2xl">
            Conditions d'Admisibilité
          </h1>
          <div>
            <div className="text-sm pb-4 text-[#666666] ">
              Vous pouvez étudier au Canada si vous répondez aux exigences
              suivantes :<br></br>
              <ul className="list-disc leading-loose ml-6 font-semibold text-[#666666]">
                <li> Vous êtes inscrit dans un établissement désigné</li>
                <li>
                  Vous fournissez la preuve que vous avez les moyens de payer
                  les frais de scolarité, les frais de subsistance et les coûts
                  de transport de retour au Canada
                </li>
                <li>
                  Vous êtes respectueux des lois, n'avez aucun casier judiciaire
                </li>
                <li>
                  Convaincre un agent d'immigration que vous retournerez dans
                  votre pays de résidence à cause de liens que vous y avez,
                  comme un emploi, une propriété, des actifs financiers ou de la
                  famille;
                </li>
                <li>Vous êtes en bonne santé et subissez un examen médical</li>
              </ul>
            </div>
            <p className="text-sm leading-loose text-[#666666] ">
              Selon le pays où vous vivez, vous pouvez obtenir votre permis
              d'études plus rapidement par l'entremise du Volet direct pour les
              études : Pour être admissible à un traitement accéléré dans le
              cadre du Volet direct pour les études (VDE), vous devez :
            </p>
            <ol className="list-decimal pb-6 leading-loose ml-6 font-semibold text-[#666666]">
              <li>
                être un résident autorisé vivant dans l'un des pays suivants :
              </li>
              <ul className="list-disc font-normal ml-4 text-sm leading-loose">
                <li>Antigua-et-Barbuda,</li>
                <li>Brésil,</li>
                <li>Chine</li>
                <li>Colombie,</li>
                <li>Costa Rica,</li>
                <li>Inde,</li>
                <li>Maroc,</li>
                <li>Pakistan,</li>
                <li>Pérou,</li>
                <li>Philippines,</li>
                <li>Saint-Vincent-et-les Grenadines,</li>
                <li>Sénégale,</li>
                <li>Trinité-et-Tobago,</li>
                <li>Vietnam</li>
              </ul>
              <li>
                avoir une lettre d'attestation provinciale de la province ou du
                territoire où vous avez l'intention d'étudier;
              </li>
              <li>
                avoir une lettre d'acceptation d'un établissement d'enseignement
                désigné de niveau postsecondaire;
              </li>
              <li>
                vivre à l'extérieur du Canada lorsque vous présentez votre
                demande;
              </li>
              <li>
                avoir la preuve que vous avez payé vos droits de scolarité pour
                votre première année d'études, si vous prévoyez d'étudier hors
                Québec;
              </li>
              <li>
                avoir un certificat de placement garanti (CPG) au montant requis
                pour votre province ou votre territoire d'études prévus;
              </li>
              <li>
                détenir une attestation de délivrance de votre Certificat
                d'acceptation du Québec (CAQ) du ministère de l'Immigration, de
                la Francisation et de l'Intégration;
              </li>
              <li>subir un examen médical avant de présenter une demande;</li>
              <li>
                obtenir un certificat de police avant de présenter une demande;
              </li>
              <li>
                avoir vos plus récents relevés de notes d'études secondaires ou
                postsecondaires;
              </li>
              <li>
                avoir obtenu la note minimale requise à l'un des tests de langue
                approuvés.
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
