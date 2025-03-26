import Form from "@/components/Form";
export default function Cadastro() {
  return (
    <div className="bg-primaryBlue flex-1 text-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-textMain mt-6 text-4xl">Cadastro</h1>
        <Form />
      </div>
    </div>
  );
}
