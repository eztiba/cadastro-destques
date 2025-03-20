"use client";
import { useState, FormEvent } from "react";
import employees from "@/data/employees.json";
import projects from "@/data/projects.json";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formObject: Record<string, string> = {};

    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Mensagem de sucesso
      } else {
        setMessage(data.message); // Mensagem de erro
      }
    } catch (error) {
      setMessage("Erro ao enviar formulário. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-tertiaryBlue mx-auto max-w-lg rounded-xl p-4 shadow-md">
      {message && (
        <div
          className={`mb-4 p-2 ${message.includes("sucesso") ? "bg-green-500" : "bg-red-500"} text-textMain rounded`}
        >
          {message}
        </div>
      )}
      {/* Campos do formulário */}
      <div className="mb-4">
        <label htmlFor="FormControlSelectUser" className="text-textMain block">
          Usuário:
        </label>
        <select id="FormControlSelectUser" name="responsavel" className="mt-1 w-full rounded border p-2">
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="FormControlSelectProject" className="text-textMain block">
          Projeto:
        </label>
        <select id="FormControlSelectProject" name="projeto" className="mt-1 w-full rounded border p-2">
          {projects.map((project) => (
            <option key={project.id} value={project.projeto}>
              {project.projeto}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="FormControlInputWho" className="text-textMain block">
          Reunião com:
        </label>
        <input
          type="text"
          id="FormControlInputWho"
          name="reuniao"
          className="mt-1 w-full rounded border p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="FormControlInputWhen" className="text-textMain block">
          Data:
        </label>
        <input type="date" id="FormControlInputWhen" name="data" className="mt-1 w-full rounded border p-2" required />
      </div>
      <div className="mb-4">
        <label htmlFor="FormControlInputTime" className="text-textMain block">
          Horário:
        </label>
        <input type="time" id="FormControlInputTime" name="hora" className="mt-1 w-full rounded border p-2" required />
      </div>
      <div className="mb-4">
        <label htmlFor="FormControlInputDetails" className="text-textMain block">
          Detalhes:
        </label>
        <input type="text" id="FormControlInputDetails" name="detalhes" className="mt-1 w-full rounded border p-2" />
      </div>
      <button
        type="submit"
        className="bg-secundaryBlue text-textMain w-full rounded p-2 hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
