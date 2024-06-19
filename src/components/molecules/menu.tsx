import Link from "next/link";
import React from "react";

type Props = {};

export default function Menu({}: Props) {
  return (
    <>
      <ul className="dropdown-list flex justify-between gap-6 uppercase my-auto">
        <li className="list">
          <Link href="/">A propos</Link>
        </li>
        <li>
          <Link className="content" href="/">Immigrer</Link>
          {/* <ul>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">Candidature</Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">
                Entréé Express - Travailleur Qualifier Fédéral (TQF)
              </Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">
                Entréé Express - Catégorie de l'expérience (CEC)
              </Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">Programme du Québec (PEQ)</Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">
                Programme Régulier des Travailleurs du Québec (PRTQ)
              </Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">Programme des candidats des provinces (PCP)</Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">
                Parrainer votre époux, conjoint de fait ou enfant à charge
              </Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="/">Parrainer vos parents ou vos grand-parents</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="/">Nos services</Link>
          {/* <ul>
            <li className="hover:bg-primary-color py-1 px-1 ">
              <Link href="">Services d'immigration</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="/">Visiter</Link>
          {/* <ul>
            <li className="hover:bg-primary-color py-1 px-1">
              <Link href="/">Visa visiteur au Canada</Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1">
              <Link href="/">Super visa pour les parents ou grand parents</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="/">Etudier</Link>
          {/* <ul>
            <li className="hover:bg-primary-color py-1 px-1">
              <Link href="/">Permis d'étude</Link>
            </li>
            <li className="hover:bg-primary-color py-1 px-1">
              <Link href="/">Prolongation de permis d'étude</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="/">Citoyenneté</Link>
        </li>
      </ul>
    </>
  );
}
