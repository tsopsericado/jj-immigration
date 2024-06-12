"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.jpg";
import Button from "@/components/atoms/button";
import Steps from "@/components/molecules/steps";
import StepOne from "@/components/molecules/stepOne";
import StepTwo from "@/components/molecules/stepTwo";
import StepThree from "@/components/molecules/stepThree";
import { useEdgeStore } from "@/lib/edgestore";
import { sendEmail } from "@/utiles/sendEmail";
import { FormData } from "@/domain/formData";
import useFileStore from "../stores/fileStore";

type Props = {};

export const salutaionOptions = [
  { value: "Mr", label: "Mr" },
  { value: "Ms", label: "Ms" },
  { value: "Mrs", label: "Mrs" },
  { value: "Miss", label: "Miss" },
  { value: "Dr", label: "Dr" },
];

export default function FormulaireEvaluation({}: Props) {
  const { file, setFile } = useFileStore();
  const curStep = +(localStorage.getItem("currentStep") as string);
  const [currentStep, setCurrentStep] = useState<number>(curStep);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { edgestore } = useEdgeStore();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let uploadedCv;
    const formData: FormData = JSON.parse(
      (localStorage.getItem("formData") as string) || "{}"
    );
    const salutation =
      JSON.parse(localStorage.getItem("salutation") as string) || "{}";
    const profession: string =
      (localStorage.getItem("profession") as string) || "";
    const niveauetude: string =
      (localStorage.getItem("niveauEtude") as string) || "";

    if (!file) {
      setErrorMessage("Veillez renseigner tout les champs svp");
      return;
    }

    uploadedCv = await edgestore.publicFiles.upload({
      file: file,
      onProgressChange: (progress) => {
        // you can use this to show a progress bar
        console.log(progress);
      },
    });
    console.log(uploadedCv);

    // send mail
    if (uploadedCv) {
      sendEmail({
        name: formData.nom,
        prenom: formData.prenom,
        etatcivil: formData.etatCivil,
        country: formData.country,
        currentCountry: formData.currentCountry,
        telephone: formData.telephone,
        programme: formData.telephone,
        profession: profession,
        etude: niveauetude,
        details: formData.detail,
        dateDeNaissance: formData.dateDeNaissance,
        salutation: salutation.value,
        email: formData.email,
        file: uploadedCv.url,
      })
        .then((res) => {
          console.log("response from email sent", res);
        })
        .catch((err) => {
          console.log("this is error", err);
        });
      localStorage.setItem('currentStep', '1')
    }
  };

  return (
    <main className="">
      <div className=" w-[95%] md:w-[70%] mx-auto mt-8">
        <div className="flex justify-center ">
          <Image src={logo} alt="logo" height={100} width={100} />
        </div>
        <div className="flex justify-between pt-8 pb-4">
          <h3 className="w-1/2">INFORMATIONS GENERALES</h3>
          <p className="text-red-500 text-center md:text-right text-sm w-1/2">
            Veillez répondre a TOUTES les questions
          </p>
        </div>
        <Steps currentStep={currentStep} />
        {currentStep == 1 ? (
          <StepOne />
        ) : currentStep == 2 ? (
          <StepTwo />
        ) : (
          <StepThree/>
        )}
        <div className="flex justify-between mt-6">
          <Button
            className={currentStep === 1 ? "hidden" : "block"}
            content={"Précédent"}
            bgColor={"#f61626"}
            textColor={"#fff"}
            onClick={() => {
              if (currentStep > 1) {
                const curStep = currentStep - 1;
                localStorage.setItem("currentStep", JSON.stringify(curStep));
                setCurrentStep(curStep);
              }
            }}
          />
          <p className="flex-1"></p>
          {currentStep === 3 ? (
            <button
              className="bg-[#25a9e3] text-white py-1 px-3 active:translate-y-1 hover:cursor-pointer rounded"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          ) : (
            <Button
              className={""}
              content={"Suivant"}
              bgColor={"#25a9e3"}
              textColor={"#fff"}
              onClick={() => {
                if (currentStep < 3) {
                  let curStep = currentStep + 1;
                  localStorage.setItem("currentStep", JSON.stringify(curStep));
                  setCurrentStep(curStep);
                }
              }}
            />
          )}
        </div>
        {currentStep === 3 ? (
          <p className="text-center py-4 text-sm">
            Veillez cliquer sur Submit pour envoyer le formulaire
          </p>
        ) : (
          <p className="text-center py-4 text-sm">
            Veillez cliquer sur Suivant pour aller à la page suivante
          </p>
        )}
      </div>
    </main>
  );
}
