import Link from "next/link";
import React from "react";

function LandingHero() {
  return (
    <main className="relative poppins ">
      <div className="px-4 flex flex-col gap-[7.69rem]">
        <section className="flex justify-between items-center mt-16 md:z-[9999]">
          <div className="pt-32 md:pt-4">
            <p className="text-[1.128rem] font-[700] text-primary uppercase mb-4 animate-slide-in-right">
              Les meilleures destinations du monde

            </p>
            <div className="flex flex-col">
              <div className="volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-lightBlue">
                Voyagez,
                <div className="flex  flex-col">
                  <span className="ml-8 z-10">immigrez,</span>
                  <img
                    src="/assets/images/stylish-underline.png"
                    alt="stylish underline"
                    className="-mt-4 z-0 hidden md:block"
                  />
                </div>
              </div>

              <p className="volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-lightBlue">
                vivez à l'étranger. Votre agence de confiance.</p>
            </div>


            <p className="my-[1.6rem] leading-[1.692rem] text-lightGray text-[1.4rem] font-marker animate-slide-in-right ">
              Votre clé pour une vie meilleure au Canada. Services d'immigration fiables et personnalisés.
            </p>

            <div className="flex gap-6 items-center ">
              <div>
                <Link href="/a-propos"

                  className="bg-red-600 text-white text-[15px] font-[600] shadow-none border-none rounded-full p-4 hover:bg-secondary hover:text-gray-800 w-[9.58788rem] h-[3rem]"
                > Plus d'infos</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
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
