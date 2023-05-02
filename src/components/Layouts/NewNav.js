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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgNav, setBgNav] = useState("bg-transparent text-white");
  return (
    <div className="relative">
      <nav
        className={`hover:bg-white hover:text-black py-[0.5rem] px-[1rem] w-full z-50 flex justify-between items-center ${bgNav}`}
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
        <div className="flex items-center justify-between">
          <Link to="/" className="">
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
          </Link>
        </div>
        <ul className="hidden lg:flex justify-between space-x-6 sm:hidden ">
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
            <Link to="/professionels">Professionnels</Link>
          </li>
        </ul>
        <ul className="hidden lg:flex space-x-3 text-xl sm:hidden">
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

        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:block lg:hidden cursor-pointer "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
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
          <div className="bubble-text">
            <ul className="flex justify-center space-x-6">
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/mobiles/smartphones">Smartphones</Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/mobiles/telephones-portables">
                  Téléphones Portables
                </Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/accessoires">Accessoires</Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/mobiles/objets-connectes">
                  Objets connectés
                </Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/ou-acheter">Où acheter</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showAssist && (
        <div
          className="bubble z-60"
          onMouseEnter={() => {
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
          <div className="bubble-text">
            <ul className="flex justify-center space-x-6">
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/conseils-pratiques">Choisir mon Wiko</Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/assistance-wiko">Commander mon Wiko</Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/shop/assistance-produit-wiko/">
                  Utiliser mon Wiko
                </Link>
              </li>
              <li className="text-xl font-light hover:font-bold">
                <Link to="/faq">Foire aux questions</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
