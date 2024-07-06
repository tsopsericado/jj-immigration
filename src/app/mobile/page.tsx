"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import slugify from "react-slugify";

type Props = {};

export default function MobileMenu({}: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [immigrationClicked, setImmigrationClicked] = useState<boolean>(false);
  const [visiterClicked, setVisiterClicked] = useState<boolean>(false);
  const [etudeClicked, setEtudeClicked] = useState<boolean>(false);
  const [serviceClicked, setServiceClicked] = useState<boolean>(false);

  const pathname = usePathname();

  const immigrationSubtitle: string[] = [
    "Entrée Express - Travailleur Qualifier Fédéral (TQF)",
    "Entrée Express - Catégorie de l'expérience (CEC)",
    "Programme du Québec (PEQ)",
    "Programme Régulier des Travailleurs du Québec (PRTQ)",
    "Programme des candidats des provinces (PCP)",
    "Parrainer votre époux, conjoint de fait ou enfant à charge",
    "Parrainer vos parents ou vos grand-parents",
    "Citoyenneté",
  ];

  const visiterOptions: string[] = [
    "Visa visiteur au Canada",
    "Super visa pour les parents ou grand parents",
  ];

  const optionsEtudes: string[] = [
    "Permis d'étude",
    "Prolongation de Permis d'étude",
  ];

  const optionServicesEntreprise: string[] = [
    "Déposer votre demande",
    "Recrutement à l'international",
    "Document à obtenir",
    "Accueil et intégration",
  ];

  return (
    <section style={{background: 'linear-gradient(205deg, #050505e3, #0f0f0fcb)'}} className="overflow-auto   !text-text-color h-screen">
      <div className="flex justify-between p-4">
        <div className="">
          <figure>
            <Link href="/">
              <Image
                src="/assets/images/logoo-jj.png"
                alt="logo jj-immigration"
                width={70}
                height={70}
                className="my-auto flex"
              />
            </Link>
          </figure>
        </div>
        <div
          onClick={() => setIsClicked((prev: boolean) => !prev)}
          className="md:hidden border border-text-color text-text-color h-fit w-fit my-auto"
        >
          <IoMdClose className="hover:cursor-pointer" size={30} />
        </div>
      </div>
      <ul className=" flex flex-col list-none leading-loose gap-3 text-xl font-semibold py-5 ">
        <Link href="/a-propos">
          <li
            className={
              pathname === "/a-propos"
                ? "!text-text-color px-4 py-1 bg-primary-color "
                : " px-4 py-1"
            }
          >
            <span className="uppercase">à</span> propos
          </li>
        </Link>
        <li
          className=" px-4 py-1 justify-between"
          onClick={() => setImmigrationClicked((prev) => !prev)}
        >
          <p className="flex justify-between">
            Service d'immigration{" "}
            {immigrationClicked ? (
              <FaChevronUp
                className="my-auto"
                
              />
            ) : (
              <FaChevronDown
                className="my-auto"
                
              />
            )}
          </p>

          {immigrationClicked && (
            <ul className="">
              {immigrationSubtitle.map((item, index) => (
                <Link href={`/immigration/${slugify(item)}`}>
                  <li
                    key={index}
                    className={
                      pathname === `/immigration/${slugify(item)}`
                        ? " py-1 px-1 bg-primary-color !text-text-color "
                        : " py-1 px-1 hover:bg-primary-color border-text-color border-y text-text-color hover:text-black"
                    }
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
        <li
          className=" px-4 py-1 justify-between"
          onClick={() => setServiceClicked((prev) => !prev)}
        >
          <p className="flex justify-between">
            Nos services{" "}
            {serviceClicked ? (
              <FaChevronUp
                className="my-auto"
                
              />
            ) : (
              <FaChevronDown
                className="my-auto"
                
              />
            )}
          </p>

          {serviceClicked && (
            <ul className="">
              {optionServicesEntreprise.map((item, index) => (
                <Link href={`/immigration/${slugify(item)}`}>
                  <li
                    key={index}
                    className={
                      pathname === `/immigration/${slugify(item)}`
                        ? " py-1 px-1 bg-primary-color !text-text-color "
                        : " py-1 px-1 hover:bg-primary-color border-text-color border-y text-text-color hover:text-black"
                    }
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
        <li
          className=" px-4 py-1 justify-between"
          onClick={() => setVisiterClicked((prev) => !prev)}
        >
          <p className="flex justify-between">
            Visiter{" "}
            {visiterClicked ? (
              <FaChevronUp
                className="my-auto"
                
              />
            ) : (
              <FaChevronDown
                className="my-auto"
                
              />
            )}
          </p>

          {visiterClicked && (
            <ul className="">
              {visiterOptions.map((item, index) => (
                <Link href={`/immigration/${slugify(item)}`}>
                  <li
                    key={index}
                    className={
                      pathname === `/immigration/${slugify(item)}`
                        ? " py-1 px-1 bg-primary-color !text-text-color "
                        : " py-1 px-1 hover:bg-primary-color border-text-color border-y text-text-color hover:text-black"
                    }
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
        <li
          className=" px-4 py-1 justify-between"
          onClick={() => setEtudeClicked((prev) => !prev)}
        >
          <p className="flex justify-between">
            Etudier{" "}
            {etudeClicked ? (
              <FaChevronUp
                className="my-auto"
                
              />
            ) : (
              <FaChevronDown
                className="my-auto"
                
              />
            )}
          </p>

          {etudeClicked && (
            <ul className="">
              {optionsEtudes.map((item, index) => (
                <Link href={`/immigration/${slugify(item)}`}>
                  <li
                    key={index}
                    className={
                      pathname === `/immigration/${slugify(item)}`
                        ? " py-1 px-1 bg-primary-color !text-text-color "
                        : " py-1 px-1 hover:bg-primary-color border-text-color border-y text-text-color hover:text-black"
                    }
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
        <li className="px-4 py-1">Blogue</li>
        <li className="px-4 py-1">Nous contacter</li>
      </ul>
    </section>
  );
}
