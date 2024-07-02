import React from "react";
import ContactUsCart from "./contactUsCart";
import ImmigrationService from "./immigrationService";

type Props = {};

export default function DepotCandidature({}: Props) {
  return (
    <div className="md:flex block gap-3 w-[95%] md:w-[70%] py-10 mx-auto">
      <div className="text-[#292828] leading-loose">
        <h1 className="font-semibold text-xl">
          <span className="uppercase">é</span>tape 1
        </h1>
        <p>
          Remplissez le formulaire afin de nous faire part de vos besoins de
          main d'oeuvre.
        </p>
        <h1 className="font-semibold text-xl">
          <span className="uppercase">é</span>tape 2
        </h1>
        <p>
          Un de nos conseillers entrera en communication avec vous, afin de vous
          proposer une rencontre détaillée et faire l'analyse complète de vos
          besoins
        </p>
        <h1 className="font-semibold text-xl">
          <span className="uppercase">é</span>tape 3
        </h1>
        <p>
          Après entente et offre de service signé, nous débuterons le processus
          de recrutement et d'immigration.
        </p>
      </div>
      <div className="my-6 mx-auto w-fit">
        <ImmigrationService />
        <ContactUsCart />
      </div>
    </div>
  );
}
