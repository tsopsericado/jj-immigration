import Link from "next/link";
import React from "react";

function LandingHero() {
  return (
    <main className=" ">
      <div className=" flex flex-col w-[96%] mx-auto ">
        <section className="flex justify-between items-center  mt-6 ">
          <div className="pt-2 md:pt-4  w-full md:w-[55%]">
            <p className="text-[0.9rem] md:text-[1.2rem] font-[700] text-primary-color uppercase mb-4">
              Les meilleures destinations du monde
            </p>
            <div className="flex flex-col text-gray-800">
              <div className="font-[700] text-[2.5rem] inline-block md:inline-flex md:text-[3.75rem]  ">
                <h1>Voyagez,</h1>
                <div className="flex  flex-col">
                  <h1 className="ml-8 z-10">immigrez,</h1>
                  <img
                    src="/assets/images/stylish-underline.png"
                    alt="stylish underline"
                    className="-mt-4 z-0 hidden md:block"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className=" font-[700] text-[2.5rem] md:text-[3.75rem] inline-flex ">
                vivez au Canada. Votre agence de confiance.
              </p>
            </div>

            <p className="my-[1.6rem]  text-gray-800 text-[1.4rem] font-semibold  ">
              Votre clé pour une vie meilleure au Canada. Services d'immigration
              fiables et personnalisés.
            </p>
            <button className="contact-us-btn-landingPage">
              <Link href="/contact-us">Plus d'info</Link>
            </button>
          </div>
          <div className="hidden md:block w-[45%]">
            <img
              loading="lazy"
              src="/assets/images/lady-with-aircraft.png"
              alt="girl with phone with aircrafts on the background"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default LandingHero;
