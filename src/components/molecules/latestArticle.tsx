import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface ArticleInformation {
  ImageSource: string;
  Writer: string;
  Title: string;
  Description: string;
}

const Articles: ArticleInformation[] = [
  {
    ImageSource: "/assets/images/arrima.jpg",
    Writer: "Claire Robinson",
    Title: "Partez vivre au Canada via Arrima!",
    Description:
      "La création d’un profil de déclaration d’intérêt à Arrima est la première étape pour immigrer au Canada dans le cadre du QSWP. …",
  },
  {
    ImageSource: "/assets/images/nurse.jpg",
    Writer: "Paul Albert",
    Title: "Emplois les plus en demande à l’Île-du-Prince-Édouard",
    Description:
      "L’Île-du-Prince-Édouard accueille de nombreux immigrants qui peuvent occuper différents emplois …",
  },
  {
    ImageSource: "/assets/images/mecanic.jpg",
    Writer: "Wilson Hutton",
    Title: "Les emplois les mieux payés au Québec",
    Description:
      "Immigration au Canada Les emplois les mieux payés au Québec Le Québec réunit les conditions pour le développement des compétences Le Canada est sans aucun …",
  },
  {
    ImageSource: "/assets/images/toronto.jpg",
    Writer: "Louis Charles",
    Title: "Les meilleures villes/provinces canadiennes pour votre PVT",
    Description:
      "Les choix sont quasiment infinis pour découvrir le Canada pendant vos vacances ainsi que les opportunités d’emplois. ...",
  },
];

function GenerateTopic({
  ImageSource,
  Writer,
  Title,
  Description,
}: ArticleInformation) {
  return (
    <div className="grid place-content-center max-w-md">
      <Image
        className="rounded-t-lg h-96 object-cover"
        src={ImageSource}
        alt={Title}
        width={500}
        height={500}
      />
      <div className="rounded-b-lg bg-white p-8 h-[350px] max-lg:h-full max-[1272px]:h-[500px]">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-grayish-blue">Par {Writer}</p>
          <p className="text-2xl text-dark-blue transition hover:cursor-pointer hover:text-lime-green">
            {Title}
          </p>
          <p className="text-grayish-blue text-lg">{Description}</p>
        </div>
      </div>
    </div>
  );
}

export default function LatestArticles() {
  return (
    <section>
      <div className="grid justify-items-center py-32 bg-very-light-gray gap-y-16 bg-slate-50">
        <p className="text-5xl text-dark-blue max-w-md text-center lg:pl-16 lg:justify-self-start">
          Articles Recent
        </p>

        <ul className="list-none grid gap-y-8 lg:flex gap-4 px-16 max-[845px]:px-8">
          {Articles.map((index: ArticleInformation) => {
            return (
              <li key={uuidv4()}>
                <GenerateTopic {...index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
