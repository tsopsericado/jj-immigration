"use client";
import HeroSection from "@/components/molecules/heroSection";
import Layout from "@/components/templates/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <>
      <Layout>
        <div>
          <HeroSection
            linearGradient="linear-gradient(256deg, #1a1a1b93, #29292b79)"
            content={""}
            bgImage={"/assets/images/contact-banner.jpg"}
          />
          <section className="w-[95%] md:w-[70%] md:flex gap-4 mx-auto my-8">
            <div>
              <h1 className="text-4xl md:text-5xl py-3 font-bold ">
                Entrons en contact
              </h1>
              <p>
                Envoyez nous vos différentes questions et nous répondrons dès
                que possible
              </p>
              <form>
                <div className="flex justify-between gap-3 w-full">
                  <div className="w-1/2">
                    <Input type="text" placeholder="Nom" className="my-4" />
                    <Input type="text" placeholder="prenom" className="my-4" />
                    <Input type="tel" placeholder="tel" />
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="text"
                      placeholder="Entreprise"
                      className="my-4"
                    />
                    <Input type="text" placeholder="Ville" className="my-4" />
                    <Input type="email" placeholder="Email" className="my-4" />
                  </div>
                </div>
                <Textarea placeholder="Type your message here." />
                <Button className="my-3 bg-black">
                  <Mail className="mr-2 h-4 w-4" /> Envoyer
                </Button>
              </form>
            </div>
            <div className="bg-[#0a0a0a] w-[98%] h-fit py-5 mx-auto md:w-[400px] px-3 text-text-color">
              <h1 className="text-4xl md:text-5xl  font-bold ">Info</h1>
              <div className="pb-5">
                <h2 className="text-primary-color text-xl font-bold">
                  Bureau au Canada
                </h2>
                <div className="flex pt-4 pl-3 gap-2 ">
                  <FaMapMarkerAlt className="text-primary-color" size={20} />
                  <p className="my-auto">
                    152 rue Vallières Val-d'Or (Qc) J9P 4L3
                  </p>
                </div>
                <div className="flex pl-3 pt-4 gap-2 ">
                  <FaRegEnvelope className="text-primary-color" size={20} />
                  <Link
                    href="mailto:jjinternationalservcice@gmail.com"
                    className="my-auto hover:underline"
                  >
                    jjinternationalservcice@gmail.com
                  </Link>
                </div>
                <div className="flex pl-3 pt-4 gap-2 ">
                  <BsTelephoneFill  className="text-primary-color" size={20} />
                  <Link href="tel:+1 581-305-4090" className="my-auto hover:underline">+1 581-305-4090</Link>
                </div>
              </div>
              <div>
                <h2 className="text-primary-color text-xl font-bold">
                  Bureau au Cameroun
                </h2>
                <div className="flex pt-4 pl-3 gap-2 ">
                  <FaMapMarkerAlt className="text-primary-color" size={20} />
                  <p className="my-auto">
                    Situé près de l'Etat Civil Secondaire de Simbock
                  </p>
                </div>
                <div className="flex pl-3 pt-4 gap-2 ">
                  <FaRegEnvelope className="text-primary-color" size={20} />
                  <Link
                    href="mailto:jjinternationalservcice@gmail.com"
                    className="my-auto hover:underline"
                  >
                    jjinternationalservcice@gmail.com
                  </Link>
                </div>
                <div className="flex pl-3 pt-4 gap-2 ">
                  <BsTelephoneFill  className="text-primary-color" size={20} />
                  <Link href="tel:+237 674 883 322" className="my-auto hover:underline">+237 674 883 322</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
