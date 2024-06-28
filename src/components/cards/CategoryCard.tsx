import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  highlighted: boolean;
}

function CatergoryCard({ iconUrl, title, description, highlighted }: IProps) {
  return (
    <div
      className={`flex w-[96%] md:w-[300px] mx-auto relative flex-col border border-gray-400 gap-4 items-center p-[1.5rem] ${
        highlighted ? "bg-white shadow-xl rounded-[2.5rem]" : ""
      }`}
    >
      <div className="">
        <Image
          src={iconUrl}
          alt="category card icon"
          height={150}
          width={220}
          loading="lazy"
          className=""
        />
      </div>
      <Link href={"/a-propos"}>
        <p className="text-primary-color text-[1.2rem] font-bold hover:underline">{title}</p>
      </Link>
      <p className="text-gray-800 text-[1rem] font-semibold">{description}</p>
    </div>
  );
}

export default CatergoryCard;
