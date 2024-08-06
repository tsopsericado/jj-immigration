"use client";
import Loader from "@/components/atoms/loader";
import HeroSection from "@/components/molecules/heroSection";
import Layout from "@/components/templates/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactEmailDataType } from "@/domain/formData";
import { sendContactEmail } from "@/utiles/sendContactEmail";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {};

export default function ContactUs({ }: Props) {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    tel: "",
    message: "",
    ville: "",
    entreprise: "",
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [formData, setFormData] = useState<ContactEmailDataType>(initialValues);

  const handleChangeEvent = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const data = { ...formData, [event.target.name]: event.target.value };
    setFormData(data);
  };

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    setIsLoading((prev) => !prev);
    setErrorMsg('')
    if (
      formData.email !== "" &&
      formData.name !== "" &&
      formData.message !== "" &&
      formData.tel !== ""
    ) {
      sendContactEmail({
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        tel: formData.tel,
        ville: formData.ville,
        entrepris: formData.entreprise,
        message: formData.message,
      })
        .then((res: any) => {
          setIsLoading((prev) => !prev);
          setFormData(initialValues);
          toast.success("Email envoyé", {
            position: "top-right",
            theme: "dark",
            hideProgressBar: true,
            autoClose: 2000,
          });
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      setErrorMsg("Champ obligatoire");
      setIsLoading((prev) => !prev);
    }

  }

  return (
    <>
      <Layout>
        <div>
          <HeroSection
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
                que possible.
              </p>
              <form onSubmit={handleFormSubmit}>
                <div className="flex justify-between gap-3 w-full">
                  <div className="w-1/2">
                    <Input
                      type="text"
                      placeholder="Nom"
                      className="my-4"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChangeEvent(e)}
                    />
                    {errorMsg && (
                      <p className="text-primary-color text-xs italic">
                        {errorMsg}
                      </p>
                    )}
                    <Input
                      type="text"
                      placeholder="prenom"
                      className="my-4"
                      name="surname"
                      value={formData.surname}
                      onChange={(e) => handleChangeEvent(e)}
                    />
                    <Input
                      type="tel"
                      placeholder="tel"
                      name="tel"
                      value={formData.tel}
                      onChange={(e) => handleChangeEvent(e)}
                    />
                    {errorMsg && (
                      <p className="text-primary-color text-xs italic">
                        {errorMsg}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="text"
                      placeholder="Entreprise"
                      className="my-4"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={(e) => handleChangeEvent(e)}
                    />
                    <Input
                      type="text"
                      placeholder="Ville"
                      className="my-4"
                      name="ville"
                      value={formData.ville}
                      onChange={(e) => handleChangeEvent(e)}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="my-4"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChangeEvent(e)}
                    />
                    {errorMsg && (
                      <p className="text-primary-color text-xs italic">
                        {errorMsg}
                      </p>
                    )}
                  </div>
                </div>
                <Textarea
                  name="message"
                  onChange={(e) => handleChangeEvent(e)}
                  placeholder="Ecrivez votre message ici."
                  value={formData.message}
                />
                {errorMsg && (
                  <p className="text-primary-color text-xs italic">
                    {errorMsg}
                  </p>
                )}
                <div className="flex justify-between">
                  <p></p>
                  <Button
                    type="submit"
                    className={
                      isLoading
                        ? "my-3 bg-black hover:cursor-wait"
                        : "my-3 bg-black"
                    }
                  >
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" /> <span>Envoyer</span>
                      </>
                    )}
                  </Button>
                </div>
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
                    href="mailto:info@jj-immigration.com"
                    className="my-auto hover:underline"
                  >
                    info@jj-immigration.com
                  </Link>
                </div>
                <div className="flex pl-3 pt-4 gap-2">
                  <BsTelephoneFill className="text-primary-color" size={20} />
                  <Link
                    href="tel:+1 581-305-4090"
                    className="my-auto hover:underline"
                  >
                    +1 581-305-4090
                  </Link>
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
                <div className="flex pl-3 pt-4 gap-2">
                  <FaRegEnvelope className="text-primary-color" size={20} />
                  <Link
                    href="mailto:petitbao@yahoo.fr"
                    className="my-auto hover:underline"
                  >
                    petitbao@yahoo.fr
                  </Link>
                </div>
                <div className="flex pl-3 pt-4 gap-2 ">
                  <BsTelephoneFill className="text-primary-color" size={20} />
                  <Link
                    href="tel:+237 674 883 322"
                    className="my-auto hover:underline"
                  >
                    +237 693-423-366
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
