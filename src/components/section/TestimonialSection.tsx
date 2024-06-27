import React from "react";
import TestimonialCard from "../cards/TestimonialCard";
// import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const reviews = [
    {
      id: 0,
      imageUrl: "/assets/images/pexel1.jpg",
      reviewerName: "Ricardo, Tsopse ",
      position: "Lahore, Pakistan",
      review:
        "Je suis reconnaissant pour le système d'éducation de qualité et les soins de santé accessibles au Canada. Mon avenir est prometteur ici Merci JJ-immigration pour le service de qualité.",
    },
    {
      id: 2,
      imageUrl: "/assets/images/pexel2.jpg",
      reviewerName: "Gael Tikeng",
      position: "CEO of Red Button",
      review:
        "L'immigration au Canada a changé ma vie. J'ai trouvé un emploi épanouissant, élevé une famille formidable et je me sens chez moi..",
    },
  ];
  return (
    <section className="flex justify-between flex-col xl:flex-row items-center lg:-mt-[5rem] gap-16 pt-32 lg:mb-20 sm:mb-8">
      <div>
        <p className="text-lightGray text-2xl font-[600] text-left uppercase">
          Témoignages
        </p>
        <p className="volkhov text-5xl text-title  text-left">
          Ce que nos clients disent de nous</p>

        <div className="mt-[5.12rem] ">
          <img
            src="/assets/images/slide-indicator.png"
            alt="slide indicator"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-[4.12rem] ">
        <div className="relative">
          <TestimonialCard
            key={reviews[0].id}
            position={reviews[0].position}
            review={reviews[0].review}
            reviewerName={reviews[0].reviewerName}
            imageUrl={reviews[0].imageUrl}
          />
          <div className="absolute -bottom-[6rem] left-32 -z-10">
            <TestimonialCard
              key={reviews[1].id}
              position={reviews[1].position}
              review={reviews[1].review}
              reviewerName={reviews[1].reviewerName}
              imageUrl={reviews[1].imageUrl}
              isBackdrop
            />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="hover:cursor-pointer">
            <img src="/assets/images/chevron-up.png" alt="chevron up" />
          </div>
          <div className="hover:cursor-pointer">
            <img src="/assets/images/chevron-down.png" alt="chevron up" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
