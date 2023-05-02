import React from "react";
import Navigation from "../components/Layouts/Navigation";
export default function FaqPage() {
  return (
    <>
      <div className="bg-black pt-20">
       
      </div>

      <div className="bg-slate-200 px-4 sm:py-40 sm:px-6 lg:max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-[#00b2a9] font-bold text-center mb-8">
          Foire aux Questions
        </h1>
        <p className="text-md font-bold text-center mb-12">
          Trouvez-ici les explications sur l'utilisation de votre téléphone, vos
          accessoires et objets connectés.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-10 mb-12">
          <select
            id="phone"
            name="select"
            className="w-full sm:w-auto px-10 p-2  rounded-md bg-[#00b2a9] text-white  sm:mb-0 "
          >
            <option value="selecteur" className="bg-white text-black ">
              Sélectionnez le modèle de téléphone!{" "}
            </option>

            <option value="1" className="bg-white text-gray-800">
              F100
            </option>
            <option value="2" className="bg-white text-gray-800">
              F200
            </option>
            <option value="3" className="bg-white text-gray-800">
              JERRY2
            </option>
            <option value="3" className="bg-white text-gray-800">
              FEVER
            </option>
            <option value="3" className="bg-white text-gray-800">
              FREDDY
            </option>
            <option value="3" className="bg-white text-gray-800">
              HARRY
            </option>
          </select>
          <div className="my-3">
            <p className=" sm:mx-4">ou</p>
          </div>
          <select
            id="phone"
            name="select"
            className="w-full sm:w-auto px-10 p-2 rounded-md bg-[#00b2a9] text-white"
          >
            <option value="selecteur" className="bg-white text-black  ">
              Sélectionnez un accessoire ou un objet connecté
            </option>
            <option value="1" className="bg-white text-gray-800">
              Casque bluetooth WiSHAKE
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
