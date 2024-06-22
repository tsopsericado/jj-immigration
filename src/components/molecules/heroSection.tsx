import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  content: string;
  bgImage: string;
  linearGradient?: string
};

export default function HeroSection({ content, bgImage, linearGradient }: Props) {

  return (
    <div>
      <div
        style={{
          backgroundImage: `${linearGradient}, url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "-1"
        }}
        className="relative"
      >
        <div className="h-[400px]">
          <h1 className="font-bold uppercase flex gap-4 text-5xl absolute top-[50%] md:left-20 left-5 text-text-color">
            <FaAngleDoubleRight className={content === "" ? "hidden" : "my-auto"} size={35} />
            {content}
          </h1>
        </div>
      </div>
      
    </div>
  );
}
