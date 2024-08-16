import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center p-5">
        <div className="container text-center">
          <h2 className="text-5xl font-bold text-sky-800 mb-4">
            Seja bem-vindo!
          </h2>
          <p className="text-2xl mb-10 text-sky-700 "> Nesta farmacia você irá encontrar os melhores produtos da região com os melhores preços!</p>
          <div className="flex justify-center gap-4">
            <button className="bg-sky-600 text-white py-2 px-4 rounded-3xl hover:underline hover:font-bold hover:bg-sky-700">
              Ver produtos
            </button>
            <button className="bg-sky-600 text-white py-2 px-4 rounded-3xl hover:underline hover:font-bold hover:bg-sky-700">
              Ver categorias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
