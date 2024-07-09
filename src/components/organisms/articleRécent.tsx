import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import GenerateTopic from "../molecules/gebericTopicForArticle";

type Props = {};

export default function ArticleRécent({}: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const articles = [
    {
      ImageSource: "/assets/images/arrima.jpg",
      Writer: "Claire Robinson",
      Title: "Partez vivre au Canada via Arrima!",
      Description:
        "La création d'un profil de déclaration d'intérêt à Arrima est la première étape pour immigrer au Canada dans le cadre du QSWP. …",
    },
    {
      ImageSource: "/assets/images/nurse.jpg",
      Writer: "Paul Albert",
      Title: "Emplois les plus en demande à l'Île-du-Prince-Édouard",
      Description:
        "L'Île-du-Prince-Édouard accueille de nombreux immigrants qui peuvent occuper différents emplois …",
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
        "Les choix sont quasiment infinis pour découvrir le Canada pendant vos vacances ainsi que les opportunités d'emplois. ...",
    },
  ];

  return (
    <>
      <p className="text-5xl text-primary-color font-semibold  my-20 text-center">
        Articles Récent
      </p>
      <div className=" justify-center mx-auto flex mt-5">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mx-auto max-w-[96%]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {articles.map((art, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center shadow-xl p-6">
                      <GenerateTopic
                        ImageSource={art.ImageSource}
                        Writer={art.Writer}
                        Title={art.Title}
                        Description={art.Description}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" hidden md:flex text-primary-color"/>
          <CarouselNext className=" hidden md:flex text-primary-color"/>
        </Carousel>
      </div>
    </>
  );
}
