import React from 'react'

export default function CardPro({card}) {
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="flex flex-col items-center justify-start">
        <img
          src={card.urlImg}
          alt="infographie"
          className="w-full md:w-[210px] pb-4"
        />
        <h3 className="text-[#00b2a9] text-3xl font-light pb-4">{card.title}</h3>
        <p className="mx-6 text-lg font-light text-black">{card.content}</p>
      </div>
    </div>
  );
}
