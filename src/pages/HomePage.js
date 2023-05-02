import React, { useEffect, useState } from "react";
import { dataTel } from "../data/dataHome";
import { dataActu } from "../data/dataActu";
import { CardActu } from "../components/Card/CardActu";
import CardTel from "../components/Card/CardTel";
import SwiperTel from "../components/Home/SwiperTel";
import SwiperHome from "../components/Home/SwiperHome";
import HomeLinks from "../components/Home/HomeLinks";
import { Link } from "react-router-dom";
import SwiperQuotes from "../components/Home/SwiperQuotes";

export default function HomePage() {


  return (
    <>
      <section>
        <SwiperHome />
      </section>
      <section>
        <h1 className="font-light text-center mt-10 mb-5 mx-3 text-3xl">
          Nos nouveaux smartphones
        </h1>
        <SwiperTel />
      </section>
      <section>
        <HomeLinks />
      </section>
      <section className="bg-main text-white">
        <h2 className="text-center pt-10 font-light text-3xl">Actu</h2>
        <div className="flex flex-col md:flex-row p-2 md:space-y-0 space-y-2 md:space-x-2 justify-center md:items-stretch">
          {dataActu.slice(0, 3).map((card) => (
            <CardActu
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              date={card.date}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-10">
          <Link
            to="/actualites"
            className="px-4 py-2 text-white bg-main border border-white font-semibold rounded-lg"
          >
            LIRE LA SUITE
          </Link>
        </div>
      </section>
      <section className="md:flex md:space-x-10 bg-main pt-10 pb-20 px-10 text-white justify-center">
        <div className="md:w-1/2 max-w-lg">
          <h2 className="w-full text-white text-3xl font-light">
            Égalité Hommes-Femmes, on en parle?
          </h2>
          <hr className="mt-2" />
          <div className="flex mt-2 items-center space-x-2">
            <p className="text-6xl font-light">92</p>
            <p className="text-sm">
              C'est la note finale que nous avons obtenue.<br/> Chez WIKO, l'égalité
              professionnelle entre les hommes et les femmes est essentielle !<br/>
              note sur un total de 100
            </p>
          </div>
        </div>
        <div className="md:w-1/2 max-w-lg">
          <SwiperQuotes/>
        </div>
      </section>
    </>
  );
}
