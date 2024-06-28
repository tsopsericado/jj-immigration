import Image from "next/image";
import React from "react";

interface Props {
  ImageSource: string;
  Writer: string;
  Title: string;
  Description: string;
}

export default function GenerateTopic({
  ImageSource,
  Writer,
  Title,
  Description,
}: Props) {
  return (
    <div className="grid place-content-center w-[500px]">
      <Image
        src={ImageSource}
        alt={Title}
        width={600}
        height={500}
        className="rounded-t-lg object-cover"
      />
      <div className="rounded-b-lg bg-white py-8 h-[350px] max-lg:h-full ">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-primary-color">Par {Writer}</p>
          <p className="text-2xl text-gray-800 transition font-semibold hover:cursor-pointer hover:text-lime-green">
            {Title}
          </p>
          <article className="text-grayish-blue text-lg">{Description}</article>
        </div>
      </div>
    </div>
  );
}
