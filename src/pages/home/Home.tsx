import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center p-5">
        <div className="container text-center">
          <h2 className="text-5xl font-bold text-sky-800 mb-4">
            Seja bem-vindo!
          </h2>
          <p className="text-2xl mb-10 text-sky-700 ">
            Na nossa farmácia, você encontra os medicamentos que precisa,
            produtos de higiene pessoal das melhores marcas e uma variedade de
            itens para o seu bem-estar, sempre com os melhores preços da região.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 text-sky-950">
        <div className="flex flex-col gap-4">
          <strong className="text-center text-xl">Produtos</strong>
          <p className="text-xl px-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus modi
            impedit, inventore delectus dicta maxime ipsam omnis consequatur
            eveniet laudantium ipsa. Asperiores eaque et, maiores omnis expedita
            eveniet quae nihil.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-sky-600 text-white py-2 px-4 rounded-3xl hover:underline hover:font-bold hover:bg-sky-700">
              <Link to="/produtos">Ver produtos</Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sky-950">
          <strong className="text-center text-xl">Categorias</strong>
          <p className="text-xl px-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            possimus rem quia eos, libero ducimus voluptatibus delectus quis
            pariatur eaque non accusantium numquam, minus quae qui vel
            laudantium cumque impedit!
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-sky-600 text-white py-2 px-4 rounded-3xl hover:underline hover:font-bold hover:bg-sky-700">
              <Link to="/categorias">Ver categorias</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
