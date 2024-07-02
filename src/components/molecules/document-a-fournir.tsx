"use client";
import React from "react";
import ImmigrationService from "./immigrationService";
import ContactUsCart from "./contactUsCart";

type Props = {};

export default function DocumentAFournir({}: Props) {
  return (
    <div className="md:flex block gap-3 w-[95%] md:w-[70%] py-10 mx-auto">
      <ul className="leading-loose text-xl list-disc">
        <li>Demande de permis de travail</li>
        <li>Demande de Certificat d'acceptation du Québec (CAQ)</li>
        <li>Demande d'Étude d'impact sur le marché du travail (EIMT)</li>
      </ul>
      <div className="my-6 mx-auto w-fit">
        <ImmigrationService />
        <ContactUsCart />
      </div>
    </div>
  );
}
