import React from "react";
import CatergoryCard from "../cards/CategoryCard";

export default function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/assets/images/manitoba.jpg",
      title: "Nos objectifs",
      description:
        "Offrir des services personnalisés et de qualité..",
      highlighted: true,
    },
    {
      id: 1,
      iconUrl: "/assets/images/aircraft.png",
      title: "Notre mission",
      description:
        "Guider et soutenir les immigrants potentiels dans leur parcours d'immigration.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/assets/images/manitoba1.jpg",
      title: "Notre vision",
      description:
        "Bâtir une communauté d'immigrants prospères et épanouis au Canada ",
      highlighted: true,
    },
    {
      id: 3,
      iconUrl: "/assets/images/manitoba1.jpg",
      title: "Nos valeurs",
      description:
        " Nous sommes honnêtes, transparents et éthiques dans nos relations avec nos clients et nos partenaires.",
      highlighted: true,
    },
  ];
  return (
    <section>
      <div className="pb-10">
        <p className="text-lightGray text-2xl font-[300] text-center mt-10 pb-5">
          A propos
        </p>
        <p className="volkhov text-5xl text-title text-center">
          Nous offrons Les Meilleurs Services en</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full text-3xl">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

