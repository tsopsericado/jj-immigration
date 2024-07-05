import React from "react";
import TestimonialCard from "../cards/TestimonialCard";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      plugins={[plugin.current]}
    >
      // ...
    </Carousel>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
// import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const reviews = [
    {
      id: 0,
      isBackdrop: false,
      imageUrl: "assets/images/lalong.jpg",
      reviewerName: "Boris Lalong ",
      position: "Résident permanent",
      review:
        "Je suis très satisfait de l'accompagnement de JJ Immigration pour mon installation au Canada. Leur soutien a été exceptionnel, rendant le processus, fluide et sans stress. Je recommande leurs services sans réserve.",
    },
    {
      id: 1,
      imageUrl: "assets/images/marc-aurel.jpg",
      reviewerName: "Marc Aurel",
      position: "Etudiant en soin infirmier",
      review:
        "Je suis très heureux d'avoir confier ma procedure d'immigration a l'agence JJ-immigration.",
    },
    {
      id: 2,
      isBackdrop: false,
      imageUrl: "/assets/images/elise.jpg",
      reviewerName: "Eslie Azapgue",
      position: "Etudiante en soin infirmier",
      review:
        "I'm a nurse student, I've moved to Canada through the help of JJ-immigration international. I'm looking forward to get a job at the end of my training. ",
    },
    {
      id: 3,
      isBackdrop: false,
      imageUrl: "assets/images/Morgan.jpg",
      reviewerName: "Morgane Nguena",
      position: "Etudiante en soin Infirmiers",
      review:
        "Je suis étudiante en soin infirmiers, j'ai immigrer au Canada par le bias de JJ-immigration international.",
    },
    {
      id: 4,
      isBackdrop: false,
      imageUrl: "assets/images/boris.jpg",
      reviewerName: "Boris Djiongo",
      position: "Résident permanent",
      review:
        "Je suis très satisfait du mode de vie au Canada en tant que RP. Mon avenir est prometteur ici Merci JJ-immigration pour le service de qualité.",
    },
    {
      id: 5,
      isBackdrop: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKJxc8M3nWKfNIwVIm7cL4Z5hRputh3x_eA&s",
      reviewerName: "Yomeni Lyse",
      position: "Regroupement familial",
      review:
        "J'ai rejoins ma famille au Canada. Mon avenir est prometteur ici Merci JJ-immigration pour le service de qualité.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="bg-gray-50">
      <div className="">
        <h1 className="font-semibold text-5xl text-primary-color text-center">
          Témoignages
        </h1>
        <p className="text-gray-800 text-center text-3xl py-8">
          Ce que nos clients disent de nous
        </p>
      </div>
      <div className=" justify-center mx-auto flex ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mx-auto max-w-[96%]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {reviews.map((rev, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center shadow-xl p-6">
                      <TestimonialCard
                        imageUrl={rev.imageUrl}
                        review={rev.review}
                        reviewerName={rev.reviewerName}
                        position={rev.position}
                        isBackdrop={rev.isBackdrop}
                      />
                      {/* <span className="text-2xl font-semibold">
                        {index + 1}
                      </span> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" hidden md:flex" />
          <CarouselNext className=" hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSection;
