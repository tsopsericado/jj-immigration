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
    <>
      <ul className="nav-links flex justify-end gap-1 w-full my-auto z-[9999]">
        <Link href="/a-propos">
          <li
            className={
              pathname === "/a-propos"
                ? "!text-text-color bg-primary-color nav-link"
                : "nav-link"
            }
          >
            <span className="uppercase">à</span> propos
          </li>
        </Link>
        <li className="nav-link content">
          <Link className="text-arrow" href="/immigration">
            Services d'immigration
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>

          <ul className="dropdown">
            {immigrationSubtitle.map((item, index) => (
              <Link href={`/immigration/${slugify(item)}`}>
                <li
                  key={index}
                  className={
                    pathname === `/immigration/${slugify(item)}`
                      ? " py-1 px-1 bg-primary-color !text-text-color "
                      : " py-1 px-1 hover:bg-primary-color text-black hover:text-text-color "
                  }
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li
          className={
            pathname === "/ourServices"
              ? "nav-link content !text-text-color !bg-primary-color"
              : "nav-link content"
          }
        >
          <Link className="text-arrow" href="/ourServices">
            Nos services
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>
          <ul className="dropdown">
            {optionServicesEntreprise.map((item, idx) => (
              <Link href={`/ourServices/${slugify(item)}`} key={idx}>
                <li className={
                    pathname === `/ourServices/${slugify(item)}`
                      ? " py-1 px-1 bg-primary-color !text-text-color "
                      : " py-1 px-1 hover:bg-primary-color text-black hover:text-text-color "
                  }>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </li>

        <li className="nav-link content">
          <Link className="text-arrow" href="/visiter">
            Visiter
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>

          <ul className="dropdown">
            {visiterOptions.map((item, indx) => (
              <Link href={`/visiter/${slugify(item)}`}>
                <li
                  key={indx}
                  className={
                    pathname === `/visiter/${slugify(item)}`
                      ? " py-1 px-1 bg-primary-color !text-text-color "
                      : " py-1 px-1 hover:bg-primary-color text-black hover:text-text-color "
                  }
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="/etude">
            Etudier
            <IoMdArrowDropdown className="dropdown-icon" size={15} />
          </Link>

          <ul className="dropdown">
            {optionsEtudes.map((item, idx) => (
              <Link href={`/etude/${slugify(item)}`}>
                <li
                  key={idx}
                  className={
                    pathname === `/etude/${slugify(item)}`
                      ? " py-1 px-1 bg-primary-color !text-text-color "
                      : " py-1 px-1 hover:bg-primary-color text-black hover:text-text-color "
                  }
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <Link href="/blogue">
          <li
            className={
              pathname === "/blogue"
                ? "!text-text-color bg-primary-color nav-link"
                : "nav-link"
            }
          >
            Blogue
          </li>
        </Link>
        <Link href="/contact-us">
          <li
            className={
              pathname === "/contact-us"
                ? "!text-text-color rounded-full bg-primary-color nav-link"
                : "nav-link rounded-full border-primary-color border-2"
            }
          >
            Nous joindre
          </li>
        </Link>
      </ul>
    </>
  );
}
