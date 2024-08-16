import { useEffect, useState } from "react";
import { CardCategoria } from "../cardCategoria/CardCategoria";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

export function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {});
    } catch (error) {
      console.log("Erro ao buscar categorias", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}
