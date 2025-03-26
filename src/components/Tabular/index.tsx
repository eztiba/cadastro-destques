import { Trash2 } from "lucide-react";
import { Destaques } from "@/type";
import { useState, useEffect } from "react";

// Tipagem
interface TabularProps {
  eventos: Destaques[];
  handleDelete: (id: number) => void;
}

// Funções auxiliares para formatação e filtragem
const filterEventsByDate = (data: Destaques[], startDate: Date, endDate: Date) => {
  return data.filter((evento) => {
    const eventoDate = new Date(evento.data);
    return eventoDate >= startDate && eventoDate <= endDate;
  });
};

const Tabular = ({ eventos, handleDelete }: TabularProps) => {
  // Estado inicializado com todos os eventos
  const [filteredEvents, setFilteredEvents] = useState<Destaques[]>([]);

  // Inicializar e carregar os todos os eventos
  useEffect(() => {
    setFilteredEvents(eventos);
  }, [eventos]);

  const handleThisWeek = () => {
    const today = new Date();
    const startOfWeek = today.getDate() - today.getDay();
    const startDate = new Date(today.setDate(startOfWeek));
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    const filteredData = filterEventsByDate(eventos, startDate, endDate);
    setFilteredEvents(filteredData);
  };

  const handleNextWeek = () => {
    const today = new Date();
    const startOfNextWeek = today.getDate() - today.getDay() + 7;
    const startDate = new Date(today.setDate(startOfNextWeek));
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    const filteredData = filterEventsByDate(eventos, startDate, endDate);
    setFilteredEvents(filteredData); // Atualiza o estado com eventos filtrados para a próxima semana
  };

  const handleCleanFilters = () => {
    setFilteredEvents(eventos); // Limpa o filtro e mostra todos os eventos
  };

  return (
    <div className="m-4 flex flex-col gap-4 p-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <button className="bg-secundaryBlue text-textMain rounded p-2 hover:bg-blue-600" onClick={handleThisWeek}>
            Essa Semana
          </button>
          <button className="bg-secundaryBlue text-textMain rounded p-2 hover:bg-blue-600" onClick={handleNextWeek}>
            Próxima Semana
          </button>
        </div>
        <button className="bg-secundaryBlue text-textMain rounded p-2 hover:bg-blue-600" onClick={handleCleanFilters}>
          Limpar Filtros
        </button>
      </div>

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
          {filteredEvents.map((item) => (
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
