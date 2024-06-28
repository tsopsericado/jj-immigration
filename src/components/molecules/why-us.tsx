import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface TopicObject {
  Name: string;
  Description: string;
  ImageSource: string;
}

const Topics: TopicObject[] = [
  {
    Name: "Disponible 24/24",
    Description:
      "Immigration simplifiée: Assistance 24/7 pour un voyage serein vers le Canada.",
    ImageSource: "/assets/images/images/icon-online.svg",
  },
  {
    Name: "Transparence",
    Description:
      " Votre partenaire de confiance pour une immigration transparente et sans stress.",
    ImageSource: "/assets/images/images/icon-budgeting.svg",
  },
  {
    Name: "Expertise et Fiabilité",
    Description: "Atteignez vos objectifs d'immigration avec succès.",
    ImageSource: "/assets/images/images/icon-onboarding.svg",
  },
  {
    Name: "Efficacité et Rapidité",
    Description:
      " Des solutions sur mesure pour un processus d'immigration fluide.",
    ImageSource: "/assets/images/images/icon-api.svg",
  },
];

function MobileTopicComponent({ Name, Description, ImageSource }: TopicObject) {
  return (
    <div className="flex flex-col shadow-xl w-[95%] mx-auto py-4 items-center  ">
      <Image src={ImageSource} alt={Name} width={125} height={125} />
      <p className="text-primary-color text-3xl font-bold">{Name}</p>
      <p className="text-gray-800 max-w-md text-[1.4rem]">{Description}</p>
    </div>
  );
}

function DesktopTopicComponent({
  Name,
  Description,
  ImageSource,
}: TopicObject) {
  return (
    <div className="flex flex-col py-5 px-3 shadow-xl gap-y-4 ">
      <Image
        src={ImageSource}
        alt={Name}
        width={125}
        height={125}
        className="fill-blue-500 flex justify-center mx-auto"
      />
      <p className="text-center text-primary-color font-semibold text-2xl">{Name}</p>
      <p className="text-gray-800 max-w-sm text-[1.1rem]">{Description}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="bg-gray-50">
      <div className="md:hidden flex flex-col gap-y-8">
        <div className="grid  text-center">
          <div className="max-w-lg">
            <div className=" my-4 flex flex-col items-center">
              <p className="text-3xl font-bold text-gray-800">
                Pourqoui choisir{" "}
                <span className="text-primary-color">JJ-Immigration?</span>
              </p>

              <p className="text-gray-800 text-[1.4rem] font-semibold my-8">
                Votre partenaire de confiance pour une immigration canadienne
                réussie. Expertise, accompagnement personnalisé, et succès
                garanti.
              </p>
              <div className="flex flex-col gap-y-10">
                {Topics.map((index) => {
                  return <MobileTopicComponent key={uuidv4()} {...index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-md:hidden ">
        <div className="px-3">
          <div className="my-4">
            <p className="text-gray-800 text-4xl font-bold text-center">
              Pourquoi choisir{" "}
              <span className="!text-primary-color ">JJ-Immigration ?</span>
            </p>
            <p className="text-grayish-blue text-[1.4rem] mb-8 max-w-4xl mt-8">
              Votre partenaire de confiance pour une immigration canadienne
              réussie. Expertise, accompagnement personnalisé, et succès
              garanti.
            </p>

            <div className="flex gap-x-5 justify-around">
              {Topics.map((index) => {
                return <DesktopTopicComponent key={uuidv4()} {...index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
