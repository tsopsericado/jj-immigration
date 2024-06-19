import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {};

export default function Menu({}: Props) {
  return (
    <>
      <ul className="nav-links flex justify-between w-full my-auto">
        <li className="nav-link">
          <Link href="/">A propos</Link>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="/">
            Immigrer
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>
          <ul className="dropdown">
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">Candidature</Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">
                Entrée Express - Travailleur Qualifier Fédéral (TQF)
              </Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">
                Entrée Express - Catégorie de l'expérience (CEC)
              </Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">Programme du Québec (PEQ)</Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">
                Programme Régulier des Travailleurs du Québec (PRTQ)
              </Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">Programme des candidats des provinces (PCP)</Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">
                Parrainer votre époux, conjoint de fait ou enfant à charge
              </Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="/">Parrainer vos parents ou vos grand-parents</Link>
            </li>
          </ul>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="/">
            Nos services
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>
          <ul className='dropdown'>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color ">
              <Link href="">Services d'immigration</Link>
            </li>
          </ul>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="/">
            Visiter
            <IoMdArrowDropdown className="dropdown-icon" />
          </Link>

          <ul className='dropdown'>
              <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color">
                <Link href="/">Visa visiteur au Canada</Link>
              </li>
              <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color">
                <Link href="/">
                  Super visa pour les parents ou grand parents
                </Link>
              </li>
            </ul>
        </li>
        <li className="nav-link content">
          <Link className="text-arrow" href="/">
            Etudier
            <IoMdArrowDropdown className="dropdown-icon" size={15} />
          </Link>

          <ul className='dropdown'>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color">
              <Link href="/">Permis d'étude</Link>
            </li>
            <li className=" py-1 px-1 hover:bg-primary-color text-black hover:text-text-color">
              <Link href="/">Prolongation de permis d'étude</Link>
            </li>
          </ul>
        </li>
        <li className="nav-link">
          <Link href="/">Citoyenneté</Link>
        </li>
      </ul>
    </>
  );
}
