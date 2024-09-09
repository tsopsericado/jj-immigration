"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.jpg";

import React, { useState, useEffect } from "react";
import { reservation } from "@/utiles/billetAvion";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    email: "",
    typeVoyage: "aller-simple",
    villeDepart: "",
    villeArrivee: "",
    typeBillet: "economique",
    dateDepart: "",
    dateRetour: "",
    adultes: 0,
    jeunes: 0,
    enfants: 0,
    bebes: 0,
  });

  useEffect(() => {
    // Charger les données du localStorage
    const savedData = localStorage.getItem("flightForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // useEffect(() => {
  //   // Sauvegarder les données dans localStorage à chaque changement
  //   localStorage.setItem('flightForm', JSON.stringify(formData));
  // }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("billet", formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);
    // Ici vous pouvez utiliser un service comme EmailJS pour envoyer le formulaire.
    if (formData) {
      await reservation({
        nom: formData.nom,
        prenom: formData.prenoms,
        email: formData.email,
        typeVoyage: formData.typeVoyage,
        typeBillet: formData.typeBillet,
        villeDepart: formData.villeDepart,
        villeArrive: formData.villeArrivee,
        dateRetour: formData.dateRetour,
        dateDepart: formData.dateDepart,
        adultes: formData.adultes,
        jeunes: formData.jeunes,
        enfants: formData.enfants,
        bebes: formData.bebes,
      })
        .then((res) => {
          console.log(res);
          toast.success("Reservation envoyé", {
            position: "top-right",
            theme: "dark",
            hideProgressBar: true,
            autoClose: 2000,
          });
          if (typeof window !== "undefined") {
            localStorage.removeItem("flightForm");
          }
          setIsLoading((prev) => !prev);
          router.push("/");
        })
        .catch((err) => {
          console.log("An error occured", err);
        });
    }
  };

  return (
    <div>
      <div className="flex justify-center hover:cursor-pointer p-4 shadow-xl">
        <Link href="/">
          <Image src={logo} alt="logo" height={100} width={100} />
        </Link>
      </div>

      <div className="flex justify-center items-center min-h-screen pb-14 pt-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-2xl max-w-md w-full space-y-6 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Réservez votre billet d'avion
          </h2>

          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Prénoms</label>
            <input
              type="text"
              name="prenoms"
              value={formData.prenoms}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Type de Voyage</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="typeVoyage"
                  value="aller-simple"
                  checked={formData.typeVoyage === "aller-simple"}
                  onChange={handleChange}
                />
                <span className="ml-2">Aller Simple</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="typeVoyage"
                  value="aller-retour"
                  checked={formData.typeVoyage === "aller-retour"}
                  onChange={handleChange}
                />
                <span className="ml-2">Aller-Retour</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Ville de Départ</label>
            <input
              type="text"
              name="villeDepart"
              value={formData.villeDepart}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Ville d'Arrivée</label>
            <input
              type="text"
              name="villeArrivee"
              value={formData.villeArrivee}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Type de Billet</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="typeBillet"
                  value="economique"
                  checked={formData.typeBillet === "economique"}
                  onChange={handleChange}
                />
                <span className="ml-2">Économique</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="typeBillet"
                  value="business"
                  checked={formData.typeBillet === "business"}
                  onChange={handleChange}
                />
                <span className="ml-2">Business</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Date de Départ</label>
            <input
              type="date"
              name="dateDepart"
              value={formData.dateDepart}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {formData.typeVoyage === "aller-retour" && (
            <div>
              <label className="block text-gray-700">Date de Retour</label>
              <input
                type="date"
                name="dateRetour"
                value={formData.dateRetour}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700">Nombre de Personnes</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Adultes (+18 ans)</label>
                <input
                  type="number"
                  name="adultes"
                  value={formData.adultes}
                  onChange={handleChange}
                  min={0}
                  className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Jeunes (12-18 ans)
                </label>
                <input
                  type="number"
                  name="jeunes"
                  value={formData.jeunes}
                  onChange={handleChange}
                  min={0}
                  className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Enfants (2-12 ans)
                </label>
                <input
                  type="number"
                  name="enfants"
                  value={formData.enfants}
                  onChange={handleChange}
                  min={0}
                  className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Bébés (0-2 ans)</label>
                <input
                  type="number"
                  name="bebes"
                  value={formData.bebes}
                  onChange={handleChange}
                  min={0}
                  className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={
              isLoading
                ? "w-full bg-blue-300 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300 hover:cursor-not-allowed"
                : "w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
            }
          >
            {isLoading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}
