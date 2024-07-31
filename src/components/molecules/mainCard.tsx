import React from 'react'
import Card from './card';



export default function MainCard() {
  const slides = [
    {
      id: 0,
      image: "/assets/images/manitoba.jpg",
      title: "M Chadjie Bruce",
      description:
        "Responsable Administratif zone Afrique",
    },
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

