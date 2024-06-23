import React from "react";
import CatergoryCard from "../cards/CategoryCard";

export default function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/assets/images/manitoba.jpg",
      title: "Nos objectif",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      highlighted: true,
    },
    {
      id: 1,
      iconUrl: "/assets/images/aircraft.png",
      title: "Notre mission",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/assets/images/manitoba1.jpg",
      title: "Notre vision",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      highlighted: true,
    },
    {
      id: 3,
      iconUrl: "/assets/images/manitoba1.jpg",
      title: "Nos valeurs",
      description:
        "We deliver outsourced aviation services for military customers",
      highlighted: true,
    },
  ];
  return (
    <section>
      <p className="text-lightGray text-[1.2rem] font-[600] text-center mt-10">
        Categories
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        Nous offrons Les Meilleur Services en</p>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full ">
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

