"use client";

import { useState } from "react";

export default function FavColor() {
  // useState untuk warna default
  const [warna, setWarna] = useState("Biru");

  return (
    <section className="bg-gray-900 flex-col items-center">
    <div className="container rounded-lg shadow-lg p-4 text-center ">
      <h1>Warna Favorit saya adalah {warna}</h1>
      <hr className="m-10" />
      <p>Ubah state warna ke:</p>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("Merah")}
      >
        Merah
      </button>

      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("Kuning")}
      >
        Kuning
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("Biru")}
      >
        Biru
      </button>

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("Hijau")}
      >
        Hijau
      </button>

      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("Ungu")}
      >
        Ungu
      </button>
    </div>
    </section>
  );
}
