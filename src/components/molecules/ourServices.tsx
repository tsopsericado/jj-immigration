import React from "react";
import HeroSection from "./heroSection";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {};

export default function OurServices({ }: Props) {
  const servicesOffered: { [key: string]: string }[] = [
    {
      mainservice: "Demande de permis de travail",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe omnis quod sapiente repudiandae. Obcaecati voluptates odio dolorum?",
      link: "/immigration/entree-express-travailleur-qualifier-federal-tqf",
    },
    {
      mainservice: "Demande de Certificat d'acceptation du Québec (CAQ)",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe quod sapiente repudiandae. Obcaecati",
      link: "/travail",
    },
    {
      mainservice: "Demande d'tude d'impact sur le marché du travail (EIMT)",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe quod sapiente repudiandae. Obcaecati",
      link: "/travail",
    },
    {
      mainservice: "Permis d'étude",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/etude",
    },
    {
      mainservice: "Visa visiteur",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/visiter",
    },
    {
      mainservice: "Résidence permanente",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saep ?",
      link: "/visiter",
    },
    {
      mainservice: "Demande d'admission",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/visiter",
    },
    {
      mainservice: "Regroupement familial",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/immigration/parrainer-votre-epoux-conjoint-de-fait-ou-enfant-a-charge",
    },
    {
      mainservice: "Préparation au text de langue",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/contact-us",
    },
    {
      mainservice: "Achat de billet d'avion",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/contact-us",
    },
    {
      mainservice: "Accueil au Canada",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum deserunt saepe ?",
      link: "/contact-us",
    },
  ];

  return (
    <>
      <HeroSection
        content={"Services d'entreprises"}
        bgImage={
          "https://st3.depositphotos.com/8881578/15097/i/450/depositphotos_150979940-stock-photo-business-technology-internet-and-network.jpg"
        }
      />
      <div className="">
        <h1 className="text-3xl font-bold text-center py-6 text-[#666666]">
          Nos Services
        </h1>
        <div className="pb-6">
          <div className="w-[96%] md:w-[65%] mx-auto ">
            <h1 className="text-primary-color font-bold text-2xl ">
              Immigration Canadinne
            </h1>
            {servicesOffered.map((item, indx) => (
              <div key={indx} className=" pt-7">
                <div className="flex gap-4 text-[#666666]">
                  <FaAngleDoubleRight size={25} className="my-auto" />
                  <h1 className="font-semibold text-2xl ">
                    {item.mainservice}
                  </h1>
                </div>
                <p className="py-3 pl-8 md:w-[500px]">{item.detail}</p>
                <Link className="w-fit" href={item.link}>
                  <button className="buttonn !p-2 !rounded-full flex hover:!text-white  !text-primary-color justify-center mx-auto my-2">
                    En savoir plus
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
