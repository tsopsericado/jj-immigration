import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../molecules/card";

export function Slider() {
  const teams: { [key: string]: string }[] = [
    {
      image: "/assets/images/president.jpg",
      title: "Mr Chajie Bruce",
      description: "Responsable marketing",
    },
    {
      image: "/assets/images/pdg.jpg",
      title: "Mr Jiotsa Bertrand",
      description: "Président Directeur Général",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent>
        {teams.map((team, index) => (
          <CarouselItem key={index} className="  flex justify-center mx-auto lg:basis-1/3">
            <Card
              image={team.image}
              title={team.title}
              description={team.description}
            />
            {/* <MainCard /> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary-color hidden md:flex" />
      <CarouselNext className="text-primary-color hidden md:flex" />
    </Carousel>
  );
}
