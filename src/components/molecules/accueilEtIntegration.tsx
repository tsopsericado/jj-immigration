import React from "react";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function AccueilEtIntegration({}: Props) {
  return (
    <div className="md:flex block gap-3 w-[95%] md:w-[70%] py-10 mx-auto">
      <div className="">
        <h1 className="text-primary-color font-semibold text-3xl pb-5">
          Accueil et integration
        </h1>
        <ul className="text-xl leading-loose">
          <li>Accueil à l'aéroport international.</li>
          <li>Organisation du transport vers le nouveau milieu de vie.</li>
          <li>Organisation des communications avec le pays d'origine.</li>
          <li>Assurance privée dès l'arrivée.</li>
          <li>Fourniture de vêtements appropriés à la saison.</li>
          <li>Réseautage rapide.</li>
          <li>Demande de RAMQ.</li>
          <li>Préouverture d'un compte bancaire.</li>
          <li>Épicerie de départ.</li>
          <li>Mise en contact avec l'employeur.</li>
          <li>Fourniture d'une trousse de santé, salubrité et hygiène.</li>
          <li>
            Suivi post placement et support au travailleur afin que d'assurer la
            réussite.
          </li>
        </ul>
      </div>
      <div className="my-6 mx-auto w-fit">
        <ImmigrationService />
        <ContactUsCart />
      </div>
    </div>
  );
}
