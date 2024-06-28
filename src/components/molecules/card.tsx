import React from "react";

interface IProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: IProps) {
  return (
    <>
      <div
        className="flex flex-col w-[96%] mx-auto md:w-[350px] items-center h-full border border-gray-200 rounded-lg shadow-2xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt="personel-image"
          loading="lazy"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-color dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
