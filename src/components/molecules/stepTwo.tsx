import React, { useState } from "react";
import InputField from "../atoms/inputField";
import { FormDatatwo } from "@/domain/formData";

type Props = {};

export default function StepTwo({}: Props) {
  // const schoolLevel = localStorage.getItem('niveauEtude') as string || ""
  // const [niveaEdude, setNiveauEtude] = useState<string>(schoolLevel)
  const [localData, setLocalData] = useState<FormDatatwo | null>(() => {
    if (typeof window !== "undefined") {
      const fromLocalStorage =
        JSON.parse(localStorage.getItem("secondFormData") as string) || {};
      if (fromLocalStorage) return fromLocalStorage;
    } else return null;
  });
  const [formData, setFormData] = useState<FormDatatwo>({
    niveauEtude: localData?.niveauEtude || "",
    emploi: localData?.emploi || "",
    function: localData?.function || "",
    experience: localData?.experience || "",
    // marié: localData?.marié || "",
    age: localData?.age || "",
    niveau: localData?.niveau || "",
    emplois: localData?.emplois || "",
    sonexperience: localData?.sonexperience || "",
    enfant: localData?.enfant || "",
  });


  const slectOption: string[] = [
    "Doctorat",
    "Maitrise",
    "+2 ou plus license/Bachelor",
    "Universitaire 1er cycle, 4 ans (License/Bachelor)",
    "Universitaire 1er cycle, 3 ans (License/Bachelor)",
    "Universitaire 1er cycle, 2 ans (License/Bachelor)",
    "Universitaire 1er cycle, 1 an",
    "Diplôme, certificat (3 ans)",
    "Diplôme, certificat (2 ans)",
    "Diplôme, certificat (1 an)",
    "Diplôme d'études secondaire",
    "Diplôme, certificat (1 an)",
  ];

  

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let data = { ...formData, [event.target.name]: event.target.value };
    console.log(data);
    // setNiveauEtude(event.target.value)
    localStorage.setItem("secondFormData", JSON.stringify(data));
    setFormData(data);
  };

  
 

  return (
    <div className="border mt-4 text-[#5c6873] border-[#25a9e3] rounded-md">
      <h3 className="pl-5 text-white bg-[#25a9e3] py-6"></h3>
      <div className="p-3 text-base flex flex-col text-gray-500 font-semibold">
        <p className="py-3 ">Votre Education</p>
        <label htmlFor="niveau-étude" className="text-gray-500 font-semibold">
          Quel est votre niveau d'études les plus élevé ?
        </label>
        <select
          className="border mt-1 mb-7 px-1 py-2 w-[95%] md:w-[500px] text-sm bg-transparent outline-none focus:border-[#25a9e3] shadow-sm rounded-md"
          name="niveauEtude"
          value={formData.niveauEtude}
          onChange={(event) => handleChange(event)}
        >
          <option selected disabled>
            -- Veillez selectionner --
          </option>
          {slectOption.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <InputField
          value={formData.emploi}
          label="Avez-vous actuellement un emploi ?"
          inputName="emploi"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <InputField
          value={formData.function}
          label="Quel est votre function ou post ?"
          inputName="function"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <InputField
          value={formData.experience}
          label="Nombre d'année d'experience ?"
          inputName="experience"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        {/* <InputField
          value={formData.marié}
          label="Etes-vous marié ?"
          inputName="marié"
          type="text"
          onChange={(event) => handleChange(event)}
        /> */}
        <InputField
          value={formData.age}
          label="Age de votre conjoint/conjointe ?"
          inputName="age"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        {/* <label htmlFor="niveau-étude" className="text-gray-500 font-semibold">
          Quel est son niveau d'étude le plus élevé ?
        </label>
        <select
          className="border mt-1 mb-7 px-1 py-2 w-[95%] md:w-[500px] text-sm bg-transparent outline-none focus:border-[#25a9e3] shadow-sm rounded-md"
          name="niveau-étude"
          // value={schoolLevel}
          onChange={(event) => handleChange(event)}
        >
          <option selected disabled>
            -- Veillez selectionner --
          </option>
          {slectOption.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select> */}
        <InputField
          value={formData.emplois}
          label="Son emploi ?"
          inputName="emplois"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <InputField
          value={formData.sonexperience}
          label="Son nombre d'année d'experience ?"
          inputName="sonexperience"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <InputField
          value={formData.enfant}
          label="Combien d'enfants avez-vous ?"
          inputName="enfant"
          type="text"
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
}
