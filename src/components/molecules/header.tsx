"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope, FaRegClock } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import Image from "next/image";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";
import useIsOpen from "@/app/stores/menuState";

type Props = {};

export default function Header({}: Props) {
  const {isOpen, setIsOpen} = useIsOpen();
  console.log("from header", isOpen);
  return (
    <>
      <header className="z-[9999]">
        <div className="bg-primary-color text-text-color  flex justify-center">
          <div className="w-full">
            <ul className="md:flex block  w-[70%] justify-between mx-auto text-sm font-semibold">
              <li className="flex pt-2 gap-2 justify-center">
                <FaRegEnvelope className="my-auto" size={20} />
                <Link
                  className="my-auto hover:underline"
                  href="mailto:jjinternationalservcice@gmail.com"
                >
                  jjinternationalservcice@gmail.com
                </Link>
              </li>
              <li className="flex pl-12 pt-4 justify-center gap-2">
                <FaMapMarkerAlt className="my-auto" size={20} />
                <p className="my-auto">
                  152 rue Vallières Val-d'Or (Qc) J9P 4L3
                </p>
              </li>
              <li className="flex pl-10 pt-4 justify-center gap-2">
                <FaRegClock className="my-auto" size={20} />
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
                    <FaFacebookF
                      className="hover:translate-x-1 hover"
                      size={20}
                    />
                  </Link>
                </li>
                <li className="active:translate-x-1">
                  <Link href="https://www.x.com">
                    <FaXTwitter
                      className="hover:translate-x-1 hover"
                      size={20}
                    />
                  </Link>
                </li>
                <li className="active:translate-x-1">
                  <Link href="https://www.instagram.com">
                    <AiFillInstagram
                      className="hover:translate-x-1 hover"
                      size={20}
                    />
                  </Link>
                </li>
              </ul>
              <div className=" md:border-l-2 my-auto hidden md:flex px-6 md:border-text-color">
                <form action="/" method="post">
                  <div className="input flex text-[#3a3737] bg-white w-[60%] mx-auto md:w-[95%] items-center py-1 px-2 gap-2 rounded-full">
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
                className=" hidden md:flex my-auto active:translate-y-1 hover:bg-text-color hover:text-[#3a3737] bg-tertiary-color"
              >
                <Link href="/formulaire-devaluation">
                  Formulaire D'evaluation
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* lower header */}
        <div className="main-header">
          <div className="flex justify-between px-4 shadow-2xl ">
            <div className="">
              <figure>
                <Link href="/">
                  <Image
                    src="/assets/images/logoo-jj.png"
                    alt="logo jj-immigration"
                    width={100}
                    height={100}
                    className="my-auto flex"
                  />
                </Link>
              </figure>
            </div>
            <div className="hidden w-[75%] md:flex">
              <nav className="my-auto w-full flex">
                <Menu />
              </nav>
            </div>
            {!isOpen ? (
              <div
                onClick={() => {
                  console.log("header =>", isOpen);
                  setIsOpen(!isOpen)
                }}
                className="md:hidden border border-primary-color text-primary-color h-fit w-fit my-auto"
              >
                <IoMdMenu className="hover:cursor-pointer p-1" size={30} />
              </div>
            ) : (
              <MobileMenu />
            )}
          </div>
        </div>
      </header>
    </>
  );
}
