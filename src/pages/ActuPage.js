import { useState } from "react";
import { dataActu } from "../data/dataActu";
import { CardActu } from "../components/Card/CardActu";

export default function ActuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-[#00b2a9] py-10  mx-auto justify-center items-center w-full">
        <div className="flex justify-between items-center mt-5 mb-5  w-[100%] max-w-[1260px] mx-auto border-white border-b-2 ">
          <h1 className="font-normal text-white text-[2.5rem]">Actualités</h1>
          <div className="flex justify-between items-center">
            <button className="bg-transparent text-white px-4 py-2 uppercase tracking-tight font-semibold border border-transparent">
              Filtre
            </button>
            <svg
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="-mr-1 ml-2 h-5 w-5 text-white cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 12a1 1 0 01-.7-.3l-4.6-4.6A1 1 0 015.3 6h9.4a1 1 0 01.7 1.7l-4.6 4.6a1 1 0 01-.7.3z"
                clip-rule="evenodd"
              />
            </svg>
            {isMenuOpen && (
              <div className="absolute bg-gray-100 p-2 rounded-md mt-2"></div>
            )}
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center p-5  mx-auto">
            <aside className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {dataActu.map((item, index) => (
                <CardActu
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  subtitle={item.subtitle}
                  description={item.description}
                />
              ))}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
