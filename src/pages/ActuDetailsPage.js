import { Link, useParams } from "react-router-dom";
import { dataActu } from "../data/dataActu";
export default function ActuDetailsPage() {
  const { id } = useParams();
  const cardDetails = dataActu.find((card) => card.id === id);

  return (
    <div className="bg-[#00b2a9]   flex flex-col justify-center px-4 sm:px-6 lg:px-8x">
      <div className="bg-white mt-20 py-5 px-5 md:w-4/4 lg:w-1/2  mx-auto rounded overflow-hidden shadow-lg ">
        <div className="flex flex-col-reverse md:flex-row py-5">
          <img
            src={process.env.PUBLIC_URL + "/" + cardDetails.image}
            alt={cardDetails.subtitle}
            className="w-full md:w-1/2 md:ml-5"
          />
          <div className="p-6">
            <p className="py-3">{cardDetails.date}</p>
            <h3 className="text-lg text-[#00b2a9] font-medium">
              {cardDetails.title}
            </h3>
            <h2 className="font-bold text-3xl mb-4">{cardDetails.subtitle}</h2>
            <div
              style={{
                borderBottom: "0.5px solid #838383",
                paddingBottom: "7px",
                width: "8rem",
                marginBottom: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-4 w-1/2 ml-5 py-9">
            {cardDetails.description}
          </p>
        </div>
        <div className="flex justify-center space-x-3">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
          >
            Retour
          </button>
          <button className="bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
            Partager
          </button>
        </div>
      </div>
      <h1 className="font-normal text-white text-[1.5rem] py-5 text-center">
        A lire dans la même rubrique:
      </h1>
      <div
        className="flex flex-wrap justify-center space-x-4 "
        style={{ maxWidth: "100%" }}
      >
        {dataActu
          .filter((card) => card.category === cardDetails.category)
          .slice(0, 3) // afficher uniquement les trois premières cartes trouvées
          .map((card) => (
            <Link key={card.id} to={`/actualites/${card.id}`}>
              <div
                key={card.id}
                className="bg-white w-80 h-auto m-2 rounded overflow-hidden shadow-lg"
              >
                <img
                  src={process.env.PUBLIC_URL + "/" + card.image}
                  alt={card.subtitle}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="py-3">{card.date}</p>
                  <h3 className="text-lg text-[#00b2a9] font-medium">
                    {card.title}
                  </h3>
                  <h2 className="font-bold text-2xl mb-4">{card.subtitle}</h2>
                  <div
                    style={{
                      borderBottom: "0.5px solid #838383",
                      paddingBottom: "7px",
                      width: "8rem",
                      marginBottom: "10px",
                    }}
                  ></div>
                  <p className="text-sm text-gray-500 mb-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
