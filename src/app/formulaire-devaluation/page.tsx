"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.jpg";
import Steps from "@/components/molecules/steps";
import StepOne from "@/components/molecules/stepOne";
import StepTwo from "@/components/molecules/stepTwo";
import StepThree from "@/components/molecules/stepThree";
import { useEdgeStore } from "@/lib/edgestore";
import { sendEmail } from "@/utiles/sendEmail";
import { FormData, Salutation } from "@/domain/formData";
import useFileStore from "../stores/fileStore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/components/atoms/loader";
import Link from "next/link";

type Props = {};

export default function FormulaireEvaluation({}: Props) {
  let curStep: number = 1;
  const { file, setFile } = useFileStore();
  if (typeof localStorage !== "undefined") {
    curStep = +((localStorage.getItem("currentStep") as string) || "1");
  }
  const [progressBar, setProgressBar] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(curStep);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  let uploadedCv;
  let formData: FormData = {
    name: undefined,
    nom: "",
    prenom: "",
    etatCivil: "",
    dateDeNaissance: "",
    country: "",
    currentCountry: "",
    email: "",
    telephone: "",
    detail: "",
    program: "",
  };
  let salutation: Salutation = {
    value: "",
    label: "",
  };
  let profession: string = "";
  let niveauetude: string = "";

  useEffect(() => {
    formData = JSON.parse((localStorage.getItem("formData") as string) || "{}");
    salutation =
      JSON.parse(localStorage.getItem("salutation") as string) || "{}";
    profession = (localStorage.getItem("profession") as string) || "";
    niveauetude = (localStorage.getItem("niveauEtude") as string) || "";
    console.log(currentStep);
  }, []);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Into handlesubmit");
    if (typeof localStorage !== "undefined") {
      formData = JSON.parse(
        (localStorage.getItem("formData") as string) || "{}"
      );
      salutation =
        JSON.parse(localStorage.getItem("salutation") as string) || "{}";
      profession = (localStorage.getItem("profession") as string) || "";
      niveauetude = (localStorage.getItem("niveauEtude") as string) || "";
    }

    if (!file) {
      setErrorMessage("Veillez renseigner tout les champs svp");
      return;
    }

    uploadedCv = await edgestore.publicFiles.upload({
      file: file,
      onProgressChange: (progress) => {
        // you can use this to show a progress bar
        setProgressBar(progress);
        console.log(progress);
      },
    });

    // send mail
    console.log("file uploaded successfully");
    setIsLoading((prev) => !prev);
    sendEmail({
      name: formData.nom,
      prenom: formData.prenom,
      etatcivil: formData.etatCivil,
      country: formData.country,
      currentCountry: formData.currentCountry,
      telephone: formData.telephone,
      programme: formData.program,
      profession: profession,
      etude: niveauetude,
      details: formData.detail,
      dateDeNaissance: formData.dateDeNaissance,
      salutation: salutation.value,
      email: formData.email,
      file: uploadedCv.url,
    })
      .then((res) => {
        // console.log("response from email sent", res);
        toast.success("Formulaire envoyé", {
          position: "top-right",
          theme: "dark",
          hideProgressBar: true,
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.log("this is error", err);
      });
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", "1");
      localStorage.removeItem("formData");
      localStorage.removeItem("currentStep");
      localStorage.removeItem("profession");
      localStorage.removeItem("cvFile");
      localStorage.removeItem("niveauEtude");
      localStorage.removeItem("salutation");
    }
    router.push("/");
  };

  const handleNextBtn = () => {
    setErrorMessage("");
    if (typeof localStorage !== "undefined") {
      formData = JSON.parse(
        (localStorage.getItem("formData") as string) || "{}"
      );
    }
    console.log("formData => ", formData);

    if (
      formData.nom !== undefined &&
      formData.email !== undefined &&
      formData.country !== "" &&
      formData.telephone !== undefined &&
      formData.program !== "" &&
      formData.etatCivil !== undefined &&
      formData.dateDeNaissance !== undefined
    ) {
      console.log(formData.nom);
      if (currentStep < 3) {
        let curStep = currentStep + 1;
        localStorage.setItem("currentStep", JSON.stringify(curStep));
        setCurrentStep(curStep);
      }
      console.log("into loop");
    } else {
      setErrorMessage("Les champs avec * sont obligatoire");
    }
  };

  return (
    <main className="">
      <div className=" w-[95%] md:w-1/2 mx-auto mt-8">
        <div className="flex justify-center hover:cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="logo" height={100} width={100} />
          </Link>
        </div>
        <div className="flex justify-between pt-8 pb-4">
          <h3 className="w-1/2">INFORMATIONS GENERALES</h3>
          <div className="w-1/2">
            <p className="text-red-500 text-center md:text-right text-sm ">
              Veillez répondre a TOUTES les questions
            </p>
            <p className="text-red-500 text-center md:text-right text-sm ">
              * INDIQUE LES CHAMPS OBLIGATOIRE
            </p>
          </div>
        </div>
        <Steps currentStep={currentStep} />
        <p className="text-primary-color">{errorMessage} </p>
        {currentStep == 1 ? (
          <StepOne />
        ) : currentStep == 2 ? (
          <StepTwo />
        ) : currentStep == 3 ? (
          <StepThree progress={progressBar} />
        ) : (
          ""
        )}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => {
              if (currentStep > 1) {
                const curStep = currentStep - 1;
                localStorage.setItem("currentStep", JSON.stringify(curStep));
                setCurrentStep(curStep);
              }
            }}
            className={
              currentStep === 1
                ? `py-1 px-3 active:translate-y-1 hover:cursor-pointer bg-primary-color text-text-color rounded hidden`
                : `py-1 px-3 active:translate-y-1 hover:cursor-pointer bg-primary-color text-text-color rounded block`
            }
          >
            Précédent
          </button>
          <p className="flex-1"></p>
          {currentStep === 3 ? (
            <button
              className={
                isLoading
                  ? "hover:cursor-wait px-10 bg-[#25aae386] rounded text-text-color"
                  : "bg-[#25a9e3] text-text-color py-1 px-3 active:translate-y-1 hover:cursor-pointer rounded"
              }
              onClick={(e) => handleSubmit(e)}
            >
              {isLoading ? <Loader /> : <span>Submit</span>}
            </button>
          ) : (
            <button
              onClick={handleNextBtn}
              className={`py-1 px-3 active:translate-y-1 hover:cursor-pointer bg-[#25a9e3] text-text-color rounded`}
            >
              Suivant
            </button>
          )}
        </div>
        {currentStep === 3 ? (
          <p className="text-center py-4 text-sm">
            Veillez cliquer sur Submit pour envoyer le formulaire
          </p>
        ) : (
          <div className="">
            <p className="text-red-500  text-lg ">{errorMessage}</p>
            <p className="text-center py-4 text-sm">
              Veillez cliquer sur Suivant pour aller à la page suivante
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
