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
    // <div className=''>
    //   <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    //     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">M Chadjie Brice</h5>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Responsable jj-Immigration Cameroun et CEO Cabinet Emergence</p>
    //     </div>
    //   </a>
    // </div>

    <section>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full pb-20">
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

