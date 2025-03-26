"use client";
import Tabular from "../components/Tabular";
import { useEffect, useState } from "react";
import { Destaques } from "@/type";

export default function Home() {
  const [data, setData] = useState<Destaques[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const id_delete = id;
    try {
      const response = await fetch(`/api?id=${id_delete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const responseData = await response.json();
        setData((prevItems) => prevItems.filter((item) => item.id !== id));
        console.log("ResponseOK - DataDeleted", responseData);
      } else {
        const responseData = await response.json();
        console.log("Response not OK - DataNotDeleted", responseData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-primaryBlue flex-1 text-center">
      <h1 className="text-textMain mt-6 text-4xl">Cadastro dos Destaques da Semana</h1>
      <Tabular eventos={data} handleDelete={handleDelete} />
    </div>
  );
}
