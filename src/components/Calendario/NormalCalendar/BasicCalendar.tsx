"use client";
import { useEffect, useState } from "react";
import { Destaques, Event } from "@/type";
import Calendar from "../Calendar";
import EventModal from "@/components/ModalEvent/EventModal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const BasicCalendar = () => {
  const [eventoSelecionado, SeteventoSelecionado] = useState(null);
  const [evento, setEvento] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      const newData = convertDestaquesToEvents(data);
      setEvento(newData);
    };
    fetchData();
  }, []);

  const handleEventClick = (evento) => {
    SeteventoSelecionado(evento);
  };
  const handleEventClose = () => {
    SeteventoSelecionado(null);
  };

  const convertDestaquesToEvents = (destaques: Destaques[]): Event[] => {
    return destaques.map((destaque) => {
      const start = new Date(`${destaque.data}T${destaque.hora}`);
      const end = new Date(start);
      end.setHours(end.getHours() + 1);
      return {
        id: destaque.id,
        title: destaque.reuniao,
        start: start,
        end: end,
        responsavel: destaque.responsavel,
        projeto: destaque.projeto,
        detalhes: destaque.detalhes,
      };
    });
  };

  return (
    <>
      <Calendar events={evento} onSelectEvent={handleEventClick} />
      {eventoSelecionado && <EventModal evento={eventoSelecionado} onClose={handleEventClose} />}
    </>
  );
};
export default BasicCalendar;
