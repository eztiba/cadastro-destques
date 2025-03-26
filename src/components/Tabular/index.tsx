"use client";
import { useEffect, useState } from "react";
import { Destaques } from "@/type";
import { Trash2 } from "lucide-react";

const Tabular = () => {
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
        console.log("deleteSupabaseItem - ResponseOK - data deleted", responseData);
      } else {
        const responseData = await response.json();
        console.log("deleteSupabaseItem - Response not OK", responseData);
      }
    } catch (error) {
      const responseData = await response.json();
      console.log("deleteSupabaseItem - try/catch error", responseData);
      console.error("deleteSupabaseItem - try/catch error - error", error);
    }
  };

  return (
    <div className="m-4 p-2">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center">Projeto</th>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center">Responsável</th>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center">Data</th>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center">Horário</th>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center">Reunião</th>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center">Detalhes</th>
            <th className="bg-headerTable text-textMain px-4 py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="even:bg-primaryBlue odd:bg-rowTable">
              <td className="text-textMain px-4 py-2 text-center">{item.projeto}</td>
              <td className="text-textMain px-4 py-2 text-center">{item.responsavel}</td>
              <td className="text-textMain px-4 py-2 text-center">{item.data}</td>
              <td className="text-textMain px-4 py-2 text-center">{item.hora}</td>
              <td className="text-textMain px-4 py-2 text-center">{item.reuniao}</td>
              <td className="text-textMain px-4 py-2 text-center">{item.detalhes}</td>
              <td className="text-textMain px-4 py-2 text-center">
                <button onClick={() => handleDelete(item.id)}>
                  <Trash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabular;
