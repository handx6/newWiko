import React from "react";
import Navigation from "../components/Layouts/Navigation";
import { dataInfo } from "../data/dataPro";
import CardPro from "../components/Card/CardPro";

export default function ProPage() {
  return (
    <>
      <section className="">
        {/* <Navigation /> */}
        <img
          src={
            window.innerWidth < 768 ? "/img/wikob-sm.jpeg" : "/img/wikob.jpg"
          }
          alt="background"
          className="w-full  object-cover object-bottom"
        />
      </section>
      <section className="pt-20 pb-10">
        <div className="px-28 lg:w-2/3 lg:px-18 mx-auto pt-10 pb-20">
          <p className=" text-2xl text-center font-light text-gray-600">
            Devenu incontournable sur le marché de la téléphonie mobile grand
            public, Wiko met toute son expertise au service des entreprises
            grâce à Wiko Business Solution, l'offre Wiko spécialement adaptée
            aux besoins et projets des professionnels.
          </p>
        </div>
        <div className="flex md:px-20 justify-center flex-col lg:flex-row lg:items-center">
          <img
            src="img/pros/transformation.jpeg"
            alt="Transformation digitale"
            className="lg:w-1/2 pb-10 lg:pb-0"
          />
          <p className="px-10 font-light text-gray-600 text-lg">
            La transformation digitale est aujourd'hui une étape indispensable
            au développement des entreprises car elle permet de gagner en
            compétitivité et productivité. Chez Wiko, nous sommes conscients de
            l'importance de cette étape et nous vous accompagnons en vous
            proposant des solutions de mobilité et de digitalisation adaptées à
            votre projet.
          </p>
        </div>
        <div className="flex md:px-20 justify-center flex-col-reverse lg:flex-row lg:items-center">
          <p className="px-10 font-light text-gray-600 text-lg">
            Les équipes Wiko Business Solution sont composées d'experts B2B
            engagés dans un partenariat de qualité en matière de sécurité,
            d'assistance, d'accompagnements et de conseils via nos offres.
            Disponibles, accessibles et réactifs, notre souhait est d'établir
            une relation de confiance pour transformer vos objectifs en
            réussites.
          </p>
          <img
            src="img/pros/wiko-business-solutions.jpg"
            alt="wiko buisness solutions"
            className="lg:w-1/2 py-10 lg:py-0"
          />
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-black mb-10 text-center text-3xl font-bold">
          Un accompagnement sur-mesure
        </h2>
        <p className="mx-20 lg:mx-40 text-md font-light text-center">
          Les équipes Wiko ont mis en place des solutions de mobilités
          s'articulant autour de 3 piliers. Wi Plan, Wi Build, Wi Run. Ce
          processus de transformation digitale complet sera assurément vecteur
          d'opportunités pour vos entreprises.
        </p>
        <div className="pt-20 md:flex md:p-20  md:items-start">
          {dataInfo.map((item, index) => (
            <CardPro key={index} card={item} />
          ))}
        </div>
      </section>
      <section>
        <div className=" md:mx-20  mx-auto bg-[#F8F9FA] lg:max-w-3/4 flex flex-col items-center">
          <h3 className="mt-10 pb-4 text-2xl font-medium text-center">
            Présentez-nous votre projet !
          </h3>
          <p className="font-light text-sm text-center pb-10">
            L'un de nos experts B2B vous recontactera dans les plus brefs
            délais.
          </p>
          <form action="" className="px-4 pb-10">
            <div className="md:flex md:space-x-4">
              <div className="py-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-[#00B2A9] block"
                >
                  Nom*
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#00B2A9] w-full"
                  id="name"
                  name="name"
                />
              </div>
              <div className="py-4 md:w-1/2">
                <label
                  htmlFor="fName"
                  className="text-base font-bold text-[#00B2A9] block"
                >
                  Prénom*
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#00B2A9] w-full"
                  id="fName"
                  name="fName"
                />
              </div>
            </div>
            <div className="md:flex md:space-x-4">
              <div className="py-4 md:w-1/2">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-[#00B2A9] block"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="bg-transparent border-b border-[#00B2A9] w-full"
                  id="email"
                  name="email"
                />
              </div>
              <div className="py-4 md:w-1/2">
                <label
                  htmlFor="phone"
                  className="text-base font-bold text-[#00B2A9] block"
                >
                  Téléphone*
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#00B2A9] w-full"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
            <div className="md:flex md:space-x-4">
              <div className="py-4 md:w-1/2">
                <label
                  htmlFor="reason"
                  className="text-base font-bold text-[#00B2A9] block"
                >
                  Raison sociale*
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#00B2A9] w-full"
                  id="reason"
                  name="reason"
                />
              </div>
              <div className="py-4 md:w-1/2">
                <label
                  htmlFor="function"
                  className="text-base font-bold text-[#00B2A9] block"
                >
                  Fonction
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#00B2A9] w-full"
                  id="function"
                  name="function"
                />
              </div>
            </div>
            <div className="py-4">
              <label htmlFor="message" className="text-base font-light ">
                Message*
              </label>
              <textarea
                cols="50"
                rows="5"
                className="bg-transparent border border-[#00B2A9] rounded-md w-full"
                id="message"
                name="message"
              />
            </div>
            <div className="py-4 flex justify-center">
              <input type="submit" className="bg-transparent border hover:text-white hover:bg-gray-500 hover border-gray-500 rounded-md text-gray-500 text-md font-semibold px-4 py-2" value="ENVOYER"/>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
