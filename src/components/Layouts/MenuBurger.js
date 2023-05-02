import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

export default function MenuBurger({ isMenuOpen, setIsMenuOpen }) {
  // gère le changement de logo

  return (
    <>
      <div className={`${isMenuOpen ? "block" : "hidden"} flex`}>
        <div className="flex opacity-50 fixed left-0 top-0 items-center h-screen justify-center w-1/4 bg-black">
          <i
            className="fa fa-angle-right fa-4x text-white"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <div
          className={`fixed w-3/4 right-0 bg-white z-50md:w-3/4 md:right-0 top-0 h-screen `}
        >
          <div className="flex justify-between text-2xl px-8 py-6">
            <Link to="shop/checkout/cart/">
              <RiShoppingBasketLine />
            </Link>
            <Link to="shop/customer/account/login/referer/aHR0cHM6Ly9mci53aWtvbW9iaWxlLmNvbS9zaG9wL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv/">
              <AiOutlineUser />
            </Link>
            <Link to="countries">
              <img
                src={"../../img/FlagFR.svg"}
                alt="French flag"
                className="w-[1rem]"
              />
            </Link>
          </div>
          <ul
            className="pl-8 text-sm pt-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <li className="font-semibold hover:font-bold">
              Nos produits
              <ul className="text-sm font-extralight pl-8">
                <li className="py-2">
                  <Link to="/shop/mobiles/smartphones">Smartphones</Link>
                </li>
                <li className="py-2">
                  <Link to="/shop/mobiles/telephones-portables">
                    Téléphones Portables
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/shop/accessoires">Accessoires</Link>
                </li>
                <li className="py-2">
                  <Link to="/shop/mobiles/objets-connectes">
                    Objets connectés
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/ou-acheter">Où acheter</Link>
                </li>
              </ul>
            </li>
            <li className="font-semibold hover:font-bold py-2">
              <Link to="/actualites">Actu</Link>
              <ul className="py-2 text-sm font-extralight pl-8">
                <li className="py-2">
                  <Link to="/shop/conseils-pratiques">Choisir mon Wiko</Link>
                </li>
                <li className="py-2">
                  <Link to="/shop/assistance-wiko">Commander mon Wiko</Link>
                </li>
                <li className="py-2">
                  <Link to="/shop/assistance-produit-wiko/">
                    Utiliser mon Wiko
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/faq">Foire aux questions</Link>
                </li>
              </ul>
            </li>
            <li className="font-semibold hover:font-bold py-2">Assistance</li>
            <li className="font-semibold hover:font-bold py-2">
              <Link to="/professionnels">Professionnels</Link>
            </li>
          </ul>
        </div>
      </div>
      <svg
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:block lg:hidden cursor-pointer absolute top-2 right-2 text-white "
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
    </>
  );
}
