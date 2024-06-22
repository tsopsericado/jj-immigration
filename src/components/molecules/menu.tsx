import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
import slugify from "react-slugify";

type Props = {};

export default function Menu({}: Props) {
  const pathname = usePathname();

  const immigrationSubtitle: string[] = [
    "Entrée Express - Travailleur Qualifier Fédéral (TQF)",
    "Entrée Express - Catégorie de l'expérience (CEC)",
    "Programme du Québec (PEQ)",
    "Programme Régulier des Travailleurs du Québec (PRTQ)",
    "Programme des candidats des provinces (PCP)",
    "Parrainer votre époux, conjoint de fait ou enfant à charge",
    "Parrainer vos parents ou vos grand-parents",
  ];

  const visiterOptions: string[] = [
    "Visa visiteur au Canada",
    "Super visa pour les parents ou grand parents",
  ];

  const optionsEtudes: string[] = [
    "Permis d'étude",
    "Prolongation de Permis d'étude",
  ];

  return (
    <>
      <ul className="nav-links flex justify-end gap-1 w-full my-auto">
        <li
          className={
            pathname === "/a-propos"
              ? "text-text-color bg-primary-color nav-link"
              : "nav-link"
          }
        >
          <Link href="/a-propos">A propos</Link>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="">
            Immigrer
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>

          <ul className="dropdown">
            {immigrationSubtitle.map((item, index) => (
              <li
                key={index}
                className={
                  pathname === `/immigration/${slugify(item)}`
                    ? " py-1 px-1 bg-primary-color text-text-color "
                    : " py-1 px-1 hover:bg-primary-color text-black hover:text-text-color "
                }
              >
                <Link href={`/immigration/${slugify(`${item}`)}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="">
            Nos services
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>
          <ul className="dropdown">
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/ourSevices">Services d'immigration</Link>
            </li>
          </ul>
        </li>

        <li className="nav-link content">
          <Link className="text-arrow" href="/">
            Visiter
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>

          <ul className="dropdown">
            {visiterOptions.map((item, indx) => (
              <li
                key={indx}
                className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color"
              >
                <Link href={`/visiter/${slugify(`${item}`)}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="">
            Etudier
            <IoMdArrowDropdown className="dropdown-icon" size={15} />
          </Link>

          <ul className="dropdown">
            {optionsEtudes.map((item, idx) => (
              <li
                key={idx}
                className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color"
              >
                <Link href={`/etude/${slugify(`${item}`)}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li
          className={
            pathname === "/citoyenneté"
              ? "text-text-color bg-primary-color nav-link"
              : "nav-link"
          }
        >
          <Link href="/citoyennete">Citoyenneté</Link>
        </li>
        <li
          className={
            pathname === "/contact-us"
              ? "text-text-color rounded-full bg-primary-color nav-link"
              : "nav-link rounded-full border-primary-color border-2"
          }
        >
          <Link href="/contact-us">Nous joindre</Link>
        </li>
      </ul>
    </>
  );
}
