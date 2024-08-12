import React from "react";

interface IProps {
  imageUrl: string;
  review: string;
  reviewerName: string;
  position: string;
  isBackdrop?: boolean;
}

function TestimonialCard({
  imageUrl,
  review,
  reviewerName,
  position,
  isBackdrop,
}: IProps) {
  return (
    <div className="">
      <div className="flex justify-center mx-auto pb-4">
        <img
          src={imageUrl}
          alt="reviewer photo"
          className="w-[8rem] h-[8rem] rounded-full"
          loading="lazy"
        />
      </div>
      <div className="">
        <p className="text-gray-800 font-semibold text-[1rem] leading-loose">
          &apos;&apos; {review} &apos;&apos;
        </p>
        <article className="text-[1.125rem] text-primary-colo text-blue-400 font-[600] mt-[2.12rem]">
          {reviewerName}
        </article>
        <p className="text-gray-800 font-[500] text-[0.875rem]">{position}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
