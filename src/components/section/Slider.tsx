import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card"
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
      image: "/assets/images/manitoba.jpg",
      title: "M Chadjie Brice",
      description: "Responsable Bureau Canada",
    },
    {
      image: "/assets/images/manitoba.jpg",
      title: "M Matame Christian",
      description: "Responsable Cameroun",
    },
    {
      image: "/assets/images/manitoba.jpg",
      title: "M Charle Belinga",
      description: "Responsable bureau Côte d'Ivoire",
    },
    {
      image: "/assets/images/manitoba.jpg",
      title: "Mlle Cynthia Kenfack",
      description: "Responsable marketing",
    },
    {
      image: "/assets/images/manitoba.jpg",
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
