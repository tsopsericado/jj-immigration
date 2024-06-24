"use client";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { FaRegEnvelope, FaRegClock } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import Image from "next/image";
import Menu from "./menu";

type Props = {};

export default function Header({ }: Props) {
  return (
    <>
      <header className="z-50">
        <div className="bg-primary-color text-text-color  flex justify-center">
          <div className="w-full">
            <ul className="md:flex block  w-[70%] justify-between mx-auto text-xs">
              <li className="flex pt-2 gap-2 justify-center">
                <FaRegEnvelope size={20} />
                <Link
                  className="my-auto hover:underline"
                  href="mailto:jjinternationalservcice@gmail.com"
                >
                  jjinternationalservcice@gmail.com
                </Link>
              </li>
              <li className="flex pl-12 pt-4 justify-center gap-2">
                <FaMapMarkerAlt size={20} />
                <p className="my-auto">
                  152 rue Vallières Val-d'Or (Qc) J9P 4L3
                </p>
              </li>
              <li className="flex pl-10 pt-4 justify-center gap-2">
                <FaRegClock size={20} />
                <p className="my-auto">Lun - Sam: 9:00 à 18:00</p>
              </li>
            </ul>
            <div className="block md:flex my-3 justify-center">
              <ul className="flex justify-center py-3 my-auto gap-6 pr-6">
                <li className="active:translate-x-1">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61557544078696&mibextid=ZbWKwL&_rdc=2&_rdr"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                </li>
                <li className="active:translate-x-1">
                  <Link href="https://www.x.com">
                    <FaXTwitter size={20} />
                  </Link>
                </li>
                <li className="active:translate-x-1">
                  <Link href="https://www.instagram.com">
                    <AiFillInstagram size={20} />
                  </Link>
                </li>
              </ul>
              <div className=" md:border-l-2 my-auto hidden md:flex px-6 md:border-text-color">
                <form action="/" method="post">
                  <div className="input flex text-[#3a3737] bg-text-color w-[60%] mx-auto md:w-[95%] items-center py-1 px-2 gap-2 rounded-full">
                    <FaSearch size={20} />
                    <input
                      type="search"
                      placeholder="search..."
                      className="w-full  outline-none bg-transparent"
                    />
                  </div>
                </form>
              </div>

              <Button
                asChild
                className="hidden md:flex my-auto active:translate-y-1 hover:bg-text-color hover:text-[#3a3737] bg-tertiary-color"
              >
                <Link href="formulaire-devaluation">
                  Formulaire D'evaluation
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* lower header */}
        <div className="main-header">
          <div className="flex justify-between px-5 shadow-2xl py-4">
            <div className="">
              <figure>
                <Link href="/">
                  <Image
                    src="/assets/images/logoo-jj.png"
                    alt="logo jj-immigration"
                    width={100}
                    height={100}
                  />
                </Link>
              </figure>
            </div>
            <div className="hidden w-[75%] md:flex">
              <nav className="my-auto w-full flex">
                <Menu />
              </nav>
            </div>
            <div className="md:hidden bg-primary-color text-text-color h-fit w-fit my-auto">
              <IoMdMenu className="hover:cursor-pointer" size={30} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
