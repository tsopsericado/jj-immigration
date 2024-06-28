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
      imageUrl: "https://jeunessedumboa.com/wp-content/uploads/2022/03/Ev4Q53LWYAAjxiI-767x1024.jpeg",
      reviewerName: "Ricardo, Tsopse ",
      position: "Lahore, Pakistan",
      review:
        "J'ai immigrer au Canada par le bias de JJ-immigration international. La procedure d'immigration n'était pas si stressante et diffice. Comme moi, faites confiance a JJ-immigration",
    },
    {
      id: 1,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSIS-ONPuo8_XxJAYNNhea4uP0hJUTMiG8A&s",
      reviewerName: "Megane boone",
      position: "CEO of Red Button",
      review:
        "Je suis très heureuse d'avoir confier ma procedure d'immigration a l'agence JJ-immigration.",
    },
    {
      id: 2,
      isBackdrop: false,
      imageUrl: "/assets/images/pexel1.jpg",
      reviewerName: "Alexandrine Spinter",
      position: "CEO of Red Button",
      review:
        "L'immigration au Canada a changé ma vie. J'ai trouvé un emploi épanouissant, élevé une famille formidable et je me sens chez moi..",
    },
    {
      id: 3,
      isBackdrop: false,
      imageUrl: "https://img.freepik.com/photos-gratuite/casual-jeune-homme-africain-souriant-isole-blanc_93675-128895.jpg",
      reviewerName: "Anderson Bilong",
      position: "CEO of Red Button",
      review:
        "L'immigration au Canada a changé ma vie. J'ai trouvé un emploi épanouissant, élevé une famille formidable et je me sens chez moi..",
    },
    {
      id: 4,
      isBackdrop: false,
      imageUrl: "https://st4.depositphotos.com/12985790/21173/i/450/depositphotos_211731336-stock-photo-smiling-african-man-arms-crossed.jpg",
      reviewerName: "Borel Gardel",
      position: "CEO of Red Button",
      review:
        "Je suis reconnaissant pour le système d'éducation de qualité et les soins de santé accessibles au Canada. Mon avenir est prometteur ici Merci JJ-immigration pour le service de qualité.",
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSection;
