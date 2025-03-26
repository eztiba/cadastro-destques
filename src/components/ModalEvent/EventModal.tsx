import React from "react";
import { Modal } from "react-bootstrap";
import { Event } from "@/type";

interface Props {
  evento: Event;
  onClose: () => void;
}

const EventModal = ({ evento, onClose }: Props) => {
  return (
    <Modal show={true} onHide={onClose} className="fixed inset-80 z-50 flex items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-lg">
        <Modal.Header className="flex items-center justify-between border-b p-4">
          <Modal.Title className="justify-content text-lg font-semibold">Reunião com: {evento.title}</Modal.Title>
          <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-800 focus:outline-none">
            &times;
          </button>
        </Modal.Header>
        <Modal.Body className="p-4">
          <p>
            <strong>Responsável: </strong>
            {evento.responsavel}
          </p>
          <p>
            <strong>Projeto: </strong>
            {evento.projeto}
          </p>
          <p>
            <strong>Data: </strong>
            {evento.start.toLocaleDateString()}
          </p>
          <p>
            <strong>Horário: </strong>
            {evento.start.toLocaleTimeString()}
          </p>
          <p>
            <strong>Detalhes: </strong>
            {evento.detalhes}
          </p>
        </Modal.Body>
        <Modal.Footer className="flex justify-end border-t p-4">
          <button
            onClick={onClose}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          >
            Fechar
          </button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default EventModal;
