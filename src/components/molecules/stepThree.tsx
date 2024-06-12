import React, { useState } from "react";
import InputField from "../atoms/inputField";
import { useEdgeStore } from "@/lib/edgestore";

type Props = {};

export default function StepThree({}: Props) {
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState<number>(1);
  const [file, setFile] = useState<File>();
  const [profession, setProfession] = useState((): string => {
    if (typeof localStorage !== "undefined") {
      const fromLocalStorage =
        JSON.parse(localStorage.getItem("profession") as string) || "";
      if (fromLocalStorage) return fromLocalStorage;
    }
    return "";
  });
  const handelaChange = (event: any) => {
    setProfession(event.target.value);
    localStorage.setItem("profession", JSON.stringify(event.target.value));
  };
  const [localFile, setLocalFile] = useState<string | ArrayBuffer | null>("");

  // handle file upload
  // const handleFileUpload = (changeEvent: any) => {
  //   const reader = new FileReader()
  //   if (changeEvent) {
  //     reader.onload = (onLoadEvent) => {
  //       if (onLoadEvent.target) {
  //         localStorage.setItem('cvFile', JSON.stringify(onLoadEvent.target.result))
  //         setLocalFile(onLoadEvent.target.result)
  //       }
  //     }
  //     reader.readAsDataURL(changeEvent.target.files[0])
  //   }
  // }

  const handleFileUpload = (e: any) => {
    console.log(e.target.files?.[0]);
    localStorage.setItem('cvFile', JSON.stringify(e.target.files[0]))
    setFile(e.target.files?.[0]);
  };
  console.log("from cpt =>", file);

  return (
    <div className="border mt-4 text-[#5c6873] border-[#25a9e3] rounded-md">
      <h3 className="pl-5 text-white bg-[#25a9e3] py-6"></h3>
      <div className="p-3 text-base flex flex-col">
        <label htmlFor="cv">Joignez votre CV le plus récent</label>
        <input
          onChange={(e) => handleFileUpload(e)}
          type="file"
          name="cv"
          accept=".docx, .pdf, .html, .zip"
          className="border py-2 px-3 mt-3 mb-5"
        />
        <div className="">
          <div className=""></div>
        </div>
        <InputField
          value={profession}
          label="Votre profession actuelle"
          inputName="profession"
          type="text"
          onChange={(event) => handelaChange(event)}
        />
      </div>
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => console.log(progress),
            });
            console.log(res)
          }
        }}
      >
        click
      </button>
    </div>
  );
}
