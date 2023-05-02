import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

export default function Navigation() {
  // gère le changement de logo
  const [isBlack, setIsBlack] = useState(false);
  // gère l'affichage des listes secondaires
  const [showProduct, setShowProduct] = useState(false);
  const [showAssist, setShowAssist] = useState(false);
  const [bgNav, setBgNav] = useState("bg-transparent text-white");
  return (
    <div className="absolute w-full z-50">
      <nav
        className={`hover:bg-white hover:text-black py-[0.5rem] px-[1rem] w-full flex justify-between items-center ${bgNav}`}
        onMouseEnter={() => {
          setIsBlack(true);
          setBgNav("bg-white text-black");
          setShowProduct(false);
        }}
        onMouseLeave={() => {
          setIsBlack(false);
          setBgNav("bg-transparent text-white");
        }}
      >
        <Link to="/">
          <div className="">
            {isBlack ? (
              <img
                src="img/wiko-logo-black.svg"
                alt="Wiko black logo"
                className="w-[6.3rem] max-h-[40px] "
              />
            ) : (
              <img
                src="img/wiko-logo-white.svg"
                alt="Wiko white logo"
                className="w-[6.3rem] max-h-[40px] "
              />
            )}
          </div>
        </Link>
        <ul className="flex justify-between space-x-6">
          <li
            className="font-semibold hover:font-bold"
            onMouseEnter={() => {
              setShowProduct(true);
              setIsBlack(true);
              setBgNav("bg-white text-black");
            }}
          >
            Nos produits
          </li>
          <li
            className="font-semibold hover:font-bold"
            onMouseEnter={() => {
              setShowProduct(false);
              setShowAssist(false);
            }}
          >
            <Link to="/actualites">Actu</Link>
          </li>
          <li
            className="font-semibold hover:font-bold"
            onMouseEnter={() => {
              setShowProduct(false);
              setShowAssist(true);
              setIsBlack(true);
              setBgNav("bg-white text-black");
            }}
          >
            Assistance
          </li>
          <li
            className="font-semibold hover:font-bold"
            onMouseEnter={() => {
              setShowProduct(false);
              setShowAssist(false);
            }}
          >
            <Link to="/professionnels">Professionnels</Link>
          </li>
        </ul>
        <ul className="flex space-x-3 text-xl">
          <li>
            <RiShoppingBasketLine />
          </li>
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <img src="img/FlagFR.svg" alt="French flag" className="w-[1rem]" />
          </li>
        </ul>
      </nav>
      {showProduct && (
        <div
          className="bubble z-60"
          onMouseEnter={() => {
            setShowProduct(true);
            setIsBlack(true);
            setBgNav("bg-white text-black");
          }}
          onMouseLeave={() => {
            setShowProduct(false);
            setIsBlack(false);
            setBgNav("bg-transparent text-white");
          }}
        >
          <div className="bubble-text py-2 text-white bg-gray-800">
            <ul className="flex justify-center space-x-6">
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/mobiles/smartphones">Smartphones</Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/mobiles/telephones-portables">
                  Téléphones Portables
                </Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/accessoires">Accessoires</Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/mobiles/objets-connectes">
                  Objets connectés
                </Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/ou-acheter">Où acheter</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showAssist && (
        <div onMouseEnter={() => {
            setShowAssist(true);
            setIsBlack(true);
            setBgNav("bg-white text-black");
          }}
          onMouseLeave={() => {
            setShowAssist(false);
            setIsBlack(false);
            setBgNav("bg-transparent text-white");
          }}
        >
          <div className="bubble-text text-white bg-gray-800 py-2">
            <ul className="flex justify-center space-x-6">
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/conseils-pratiques">Choisir mon Wiko</Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/assistance-wiko">Commander mon Wiko</Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/shop/assistance-produit-wiko/">
                  Utiliser mon Wiko
                </Link>
              </li>
              <li className="text-sm font-light hover:font-bold">
                <Link to="/faq">Foire aux questions</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
