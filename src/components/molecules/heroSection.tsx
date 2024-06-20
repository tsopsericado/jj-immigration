import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  content: string;
  bgImage: string;
};

export default function HeroSection({ content, bgImage }: Props) {
  console.log(bgImage);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "-1"
        }}
        className="relative"
      >
        <div className="h-[400px]">
          <h1 className="font-bold uppercase flex gap-4 text-5xl absolute top-[50%] left-20 text-text-color">
            <FaAngleDoubleRight className="my-auto" size={35} />
            {content}
          </h1>
        </div>
      </div>
      <div className="py-6 w-1/2 mx-auto">
        <h1 className="font-semibold text-3xl py-3">
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          expedita illum esse labore unde vel culpa mollitia animi provident,
          tempora commodi ipsum cum beatae consequatur vero, quasi ea quidem
          temporibus voluptatum, fugit quos. Natus in voluptates doloribus
          excepturi facere mollitia ratione eum minus quisquam. Vitae porro ut
          tempore! Labore voluptas fugiat dicta aperiam nesciunt et modi quaerat
          similique veritatis dolor consectetur ullam repellendus assumenda
          quibusdam ratione facilis nisi aliquid dolorem, omnis sapiente quidem
          error. Libero voluptatibus illum quibusdam modi amet porro quod totam
          quo asperiores. Libero alias iste fugiat, qui corporis sequi nemo
          quaerat nulla porro ducimus eum facere exercitationem.{" "}
        </p>
        <h1 className="font-semibold text-3xl py-3">Nos objectifs.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          eveniet exercitationem atque officia, ipsum enim iusto neque, dolor
          esse obcaecati minima laboriosam cum ducimus totam eos modi ullam
          possimus delectus maiores tenetur nemo tempora. Delectus, eveniet eos
          ullam ea eaque rem totam. Perspiciatis quisquam delectus facere autem
          molestias fugit quas!
        </p>
        <h1 className="font-semibold text-3xl py-3">Notre mission</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          eveniet exercitationem atque officia, ipsum enim iusto neque, dolor
          esse obcaecati minima laboriosam cum ducimus totam eos modi ullam
          possimus delectus maiores tenetur nemo tempora. Delectus, eveniet eos
          ullam ea eaque rem totam. Perspiciatis quisquam delectus facere autem
          molestias fugit quas!
        </p>
        <h1 className="font-semibold text-3xl py-3">
          Nos Valeurs.
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eveniet exercitationem atque officia, ipsum enim iusto neque, dolor esse obcaecati minima laboriosam cum ducimus totam eos modi ullam possimus delectus maiores tenetur nemo tempora. Delectus, eveniet eos ullam ea eaque rem totam. Perspiciatis quisquam delectus facere autem molestias fugit quas!</p>
      </div>
    </div>
  );
}
