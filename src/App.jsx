import React from "react";
import { ShoppingCart, Phone } from "lucide-react";
import { motion } from "framer-motion";
import coxinha from "./assets/coxinha.jpg";
import bolinha from "./assets/bolinha.jpg";
import frango from "./assets/frango.jpg";
import salsicha from "./assets/salsicha.jpg";
import { header } from "framer-motion/client";

// Simulação de produtos
const products = [
  {
    name: "Coxinha de Frango",
    description: "Salgado grande, recheado com frango temperado e cremoso.",
    price: "R$ 6,00",
    image: coxinha
  },
  {
    name: "Bolinha de Queijo",
    description: "Queijo derretido por dentro e crocância por fora.",
    price: "R$ 5,50",
    image: bolinha
  },
  {
    name: "Enroladinho de Salsicha",
    description: "Salsicha envolta em massa leve e dourada.",
    price: "R$ 6,50",
    image: salsicha
  },
  {
    name: "Salgado de Frango",
    description: "Um delicioso salgado de frando com catupiry",
    price: "R$ 6,90",
    image: frango
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-50 p-4 font-sans pt-20">
      {/* Cabeçalho */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-bold text-orange-500">JuSalgados</h1>
    <ul className="flex gap-6 text-sm text-gray-700 font-medium">
      <li><a href="#cardapio" className="hover:text-orange-500">Cardápio</a></li>
      <li><a href="#carrinho" className="hover:text-orange-500">Carrinho</a></li>
      <li><a href="#contato" className="hover:text-orange-500">Contato</a></li>
   </ul>
      </nav>


      <header className="bg-orange-500 text-white p-6 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold">Ju Salgados</h1>
        <p className="text-lg mt-2">Salgados grandes, sabor gigante!</p>
        <button className="mt-4 bg-white text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-100 font-semibold">
          Fazer Encomenda
        </button>
      </header>

      {/* Cardápio */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Cardápio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {products.map((item, index) => (
            <motion.div
            key={item.name}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between h-[350px]">
               {/* IMAGEM DO SALGADO */}
              <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
              />
              {/* CONTEÚDO */}
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-orange-600">{item.name}</h3>
                <p className="text-gray-600 text-sm my-2">{item.description}</p>
                <p className="font-semibold text-orange-500">{item.price}</p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-2 mt-4 flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" /> Adicionar
              </button>
            </div>
          </motion.div>
          
          ))}
        </div>   
      </section>

      {/* Contato */}
      <section className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-orange-500 mb-2">Fale com a gente</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto">
          <Phone size={16} />
          WhatsApp
        </button>
      </section>
    </div>
  );
}