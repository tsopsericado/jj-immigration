"use client"
import Header from "@/components/molecules/header";
import Layout from "@/components/templates/layout";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      {/* <button
        onClick={() => router.push("./formulaire-devaluation")}
        className="bg-[#e7151d] text-white py-3 px-4 active:translate-y-1 flex gap-2 rounded-lg "
      >
        <FaUserEdit size={25} />
        FORMULAIRE D'EVALUATION
      </button> */}
      <Layout>
        <p className="bg-green-300">Banna section</p>
      </Layout>
    </main>
  );
}
