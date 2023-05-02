import { Link } from "react-router-dom";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { RiLinkedinFill } from "react-icons/ri";
import CardFooter from "../Card/CardFooter";
import { dataFooter } from "../../data/dataFooter";
export default function Footer() {
  const logo = "img/wiko-white.svg"
  return (
    <footer className="bg-[#292828] mx-auto py-10 flex flex-col items-center justify-center0">
      <div className="text-center max-w-[1600px] ">
        <div className="items-center">
          <h3 className=" font-medium text-gray-400 pb-5">Suivez nous</h3>
        </div>

        <ul className="flex mx-auto items-center space-x-5 justify-center mb-5">
          <li>
            <Link to="/">
              <BsFacebook className="text-4xl text-white bg-blue-800 rounded-full p-2" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsInstagram className="text-4xl text-white bg-pink-600 rounded-full p-2" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <RiLinkedinFill className="text-4xl text-white bg-blue-600 rounded-full p-2" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsTwitter className="text-4xl text-white bg-blue-400 rounded-full p-2" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TfiYoutube className="text-4xl text-white bg-red-600 rounded-full p-2" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full mx-auto">
        <div className=" mx-auto max-w-lg justify-center  flex">
          <div className="lg:flex flex-row justify-center  py-3 ">
            {dataFooter.map((item) => (
              <CardFooter item={item} />
            ))}
          </div>
        </div>
        <div className="lg: flex flex-wrap justify-center pt-3 py-8">
          <img
            src={`${logo}`}
            alt="logo"
            className="align-center w-[100px]"
          />
        </div>
      </div>
    </footer>
  );
}
