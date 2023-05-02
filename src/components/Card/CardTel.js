import React from 'react'
import { Link } from 'react-router-dom';

export default function CardTel({urlImg, urlImgInfo, title, id}) {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <img src={urlImg} alt={title} className="w-full" />
      </div>
      <div className="w-1/2">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <img src={urlImgInfo} alt={`caractérisitiques ${title}`} className='py-4' />
        <Link
          to={`shop/${id}`}
          className="bg-transparent text-gray-400 hover:bg-main hover:text-white text-blue-dark font-semibold  py-2 px-4 border border-gray-400 hover:border-transparent rounded"
        >
          Découvrir
        </Link>
      </div>
    </div>
  );
}
