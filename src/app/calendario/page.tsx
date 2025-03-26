import BasicCalendar from "@/components/Calendario/NormalCalendar/BasicCalendar";

export default function Calendario() {
  return (
    <div className="flex-1 text-center">
      <h1 className="mt-6 text-4xl text-black">Calendário dos Destaques</h1>
      <BasicCalendar />
    </div>
  );
}
