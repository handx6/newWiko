import React from 'react'

export default function CardPro({card}) {
  return (
    <div className='max-w-[500px] mx-auto'>
      <div className="flex flex-col items-center">
        <img src={card.urlImg} alt="infographie" />
        <h3 className="text-[#00b2a9] text-3xl font-light">{card.title}</h3>
        <p className='mx-6 text-lg font-light text-black'>{card.content}</p>
      </div>
    </div>
  );
}
