import React from 'react'
import Card from './card';



export default function MainCard() {
  const slides = [
    {
      id: 0,
      image: "/assets/images/manitoba.jpg",
      title: "M Chadjie Brice",
      description:
        "Responsable Administratif zone Afrique",
    },
    // {
    //   id: 1,
    //   image: "/assets/images/manitoba.jpg",
    //   title: "Nos objectif",
    //   description:
    //     "Built Wicket longer admire do barton vanity itself do in it.",
    // },
    // {
    //   id: 2,
    //   image: "/assets/images/manitoba.jpg",
    //   title: "Nos objectif",
    //   description:
    //     "Built Wicket longer admire do barton vanity itself do in it.",
    // },
    // {
    //   id: 3,
    //   iconUrl: "/assets/images/manitoba.jpg",
    //   title: "Nos objectif",
    //   description:
    //     "Built Wicket longer admire do barton vanity itself do in it.",
    // },
    // {
    //   id: 4,
    //   image: "/assets/images/manitoba.jpg",
    //   title: "Nos objectif",
    //   description:
    //     "Built Wicket longer admire do barton vanity itself do in it.",
    // }
  ]



  return (
    <section>
      <div className="flex flex-col gap-4 md:flex-row bg-green-600 justify-between w-full py-1">
        {slides.map((slide) => (
          <Card
            key={slide.id}
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </div>
    </section>
  );
}

