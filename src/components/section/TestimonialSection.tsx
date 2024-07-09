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
        "Avant JJ-INTERNATIONAL, j'avais connu plusieurs déceptions par des consultants véreux. Aujourd'hui ma famille et moi sommes installées au Canada comme résident permanent. Leur soutien a été exceptionnel, rendant le processus fluide et sans stress. Je recommande sans reserve les services de JJ-INTERNATIONAL.",
    },
    {
      id: 1,
      imageUrl: "assets/images/marc-aurel.jpg",
      reviewerName: "Marc Aurel",
      position: "Étudiant en soins infirmiers",
      review:
        "Je suis très heureux d'avoir confié ma procédure d'immigration à JJ-INTERNATIONAL. Grâce à leur professionnalisme, ils font la différence.",
    },
    {
      id: 2,
      isBackdrop: false,
      imageUrl: "/assets/images/elise.jpg",
      reviewerName: "Patricia Kenfack",
      position: "Étudiante en soins infirmiers",
      review:
        "I'm a nurse student, I've moved to Canada through the help of JJ-immigration international. I'm looking forward to get a job at the end of my training. ",
    },
    {
      id: 3,
      isBackdrop: false,
      imageUrl: "assets/images/Morgan.jpg",
      reviewerName: "Morgane Nguena",
      position: "Etudiante en soins Infirmiers",
      review:
        "Je suis étudiante en Soins infirmiers, j'ai immigré au Canada par le biais de JJ-INTERNATIONAL. Je recommande vivement cette entreprise à toutes les personnes qui veulent faire comme moi, réaliser leur rêve canadien.",
    },
    {
      id: 4,
      isBackdrop: false,
      imageUrl: "assets/images/boris.jpg",
      reviewerName: "Boris Djiongo",
      position: "Résident permanent",
      review:
        "Je suis très satisfait des avantages que me procurent ma Résidence permanente au Canada. Mon avenir est prometteur ici. Merci JJ-INTERNATIONAL pour le service de qualité et pour vos précieux conseils",
    },
    {
      id: 5,
      isBackdrop: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKJxc8M3nWKfNIwVIm7cL4Z5hRputh3x_eA&s",
      reviewerName: "Yomeni Lyse",
      position: "Regroupement familial",
      review:
        "Grâce à JJ-INTERNATIONAL, J'ai fais venir mon conjoint et mes enfants au Canada. Nous sommes enfin réunis et je ne dirais jamais assez Merci aux experts de JJ pour leur patience et leur proactivité.",
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
          <CarouselPrevious className=" hidden md:flex text-primary-color" />
          <CarouselNext className=" hidden md:flex text-primary-color" />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSection;
