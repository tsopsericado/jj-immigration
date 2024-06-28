import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="flex justify-center m-auto w-screen h-screen items-center">
      <h1 className="text-primary-color text-xl font-bold text-center">JJ Immigration international</h1>
      <div className="w-16 h-16 absolute animate-ping bg-primary-color rounded-full"></div>
    </div>
  );
}