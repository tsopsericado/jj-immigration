"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.jpg";
import Button from "@/components/atoms/button";
import Steps from "@/components/molecules/steps";
import StepOne from "@/components/molecules/stepOne";
import StepTwo from "@/components/molecules/stepTwo";
import StepThree from "@/components/molecules/stepThree";
import { uploadCv } from "@/utiles/uploadCvFile";
import { useEdgeStore } from "@/lib/edgestore";

type Props = {};

export const salutaionOptions = [
  { value: "Mr", label: "Mr" },
  { value: "Ms", label: "Ms" },
  { value: "Mrs", label: "Mrs" },
  { value: "Miss", label: "Miss" },
  { value: "Dr", label: "Dr" },
];

export default function FormulaireEvaluation({}: Props) {
  const curStep = +(localStorage.getItem("currentStep") as string);
  const [currentStep, setCurrentStep] = useState<number>(curStep);
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { edgestore } = useEdgeStore();

  const handleSubmit = async () => {
    console.log("handlesubit fxn");
    const formData = JSON.parse(
      (localStorage.getItem("formData") as string) || "{}"
    );
    const salutation = (localStorage.getItem("salutation") as string) || "";
    const profession = (localStorage.getItem("profession") as string) || "";
    const niveauetude = (localStorage.getItem("niveauEtude") as string) || "";
    const file = (localStorage.getItem("cvFile") as string) || "";
    console.log("file", file);

    if (!file) {
      setErrorMessage("Veillez renseigner tout les champs svp")
      return
    }
    const cloudinaryResponse = await uploadCv(file)
    if (cloudinaryResponse) {
      console.log('response => ', cloudinaryResponse)
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
          <StepThree />
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
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            // <Button
            //   className={""}
            //   content={"Submit"}
            //   bgColor={"#25a9e3"}
            //   textColor={"#fff"}
            //   onClick={() => handleSubmit}
            // />
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
