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
      title: "Mlle Cynthia Kenfack",
      description: "Responsable marketing",
    },
    {
      image: "/assets/images/president.jpg",
      title: "Mme Luciana Tamdja",
      description: "Contact",
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
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
