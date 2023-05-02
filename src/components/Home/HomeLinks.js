import React from "react";

export default function HomeLinks() {
  if (window.innerWidth < 768) {
    return (
      <div className="px-2 py-4">
        <div className="h-[248px] w-full max-w-[420px] bg-smartphones bg-cover flex items-end">
          <h2 className="text-2xl text-white p-10 font-bold">Smartphones</h2>
        </div>
        <div className="flex space-x-2 pt-2">
          <div className="bg-accessoires bg-cover max-w-[420px] h-[248px] w-full flex items-end">
            <h2 className="text-2xl text-white p-10 font-bold">Accessoires</h2>
          </div>
          <div className="bg-obj-con bg-cover h-[248px] max-w-[420px] w-full flex items-end">
            <h2 className="text-2xl text-white p-10 font-bold">
              Objets connectés
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-2 py-8">
        <div className="flex space-x-2 justify-center">
          <div className="bg-smartphones bg-cover max-w-[420px] h-[248px] w-full flex items-end">
            <h2 className="text-2xl text-white p-10 font-bold">Smartphones</h2>
          </div>
          <div className="bg-accessoires bg-cover max-w-[420px] h-[248px] w-full flex items-end">
            <h2 className="text-2xl text-white p-10 font-bold">Accessoires</h2>
          </div>
          <div className="bg-obj-con bg-cover h-[248px] max-w-[420px] w-full flex items-end">
            <h2 className="text-2xl text-white p-10 font-bold">Smartphones</h2>
          </div>
        </div>
      </div>
    );
  }
}
