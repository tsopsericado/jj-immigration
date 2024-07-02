import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  content: string;
  bgImage: string;
};

export default function HeroSection({ content, bgImage }: Props) {

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "-1"
        }}
        className="relative "
      >
        <div className="h-[300px]">
          <h1 className="font-bold uppercase flex gap-4 text-2xl md:text-5xl absolute top-[50%] md:left-20 left-5 text-text-color bg-primary-color rounded-lg">
            <FaAngleDoubleRight className={content === "" ? "hidden" : "my-auto"} size={35} />
            {content}
          </h1>
        </div>
      </div>
      
    </div>
  );
}
