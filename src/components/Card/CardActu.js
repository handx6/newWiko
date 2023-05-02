import { Link } from "react-router-dom";
export function CardActu({ id, image, title, date, subtitle, description }) {
  return (
    <Link to={`/actualites/${id}`}>
      <div
        className=" rounded-md bg-white shadow-md  flex flex-col gap-1 w-full md:max-w-lg mx-auto "
        style={{ width: "100%", height: "100%" }}
      >
        <img src={image} alt={title} style={{ width: "100%" }} />
        <div className="px-5">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-[#00b2a9] font-medium">{title}</h1>
            <p className="text-gray-500 font-bold text-sm">{date}</p>
          </div>

          <h2 className="font-bold text-3xl ">{subtitle}</h2>

          <p className="text-sm text-gray-500 ">{description}</p>
        </div>
      </div>
    </Link>
  );
}
