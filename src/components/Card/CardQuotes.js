import React from "react";

export default function CardQuotes({ text, link, source }) {
  return (
      <blockquote className="text-white font-extralight">
        {text}
        <br />
        <a
          className="text-black underline italic font-light"
          href={link}
          target="_blank"
        >
          LIRE LA SUITE
        </a>
        <p className="text-black font-light">{source}</p>
      </blockquote>
  );
}
