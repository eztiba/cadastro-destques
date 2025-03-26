import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    // Lê o corpo da requisição como JSON
    const formData = await request.json();
    const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "destaques.json");

    // Lê o conteúdo do arquivo JSON
    const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
    const data: { id: number }[] = JSON.parse(fileContent);

    const lastId = data.length > 0 ? Math.max(...data.map((item) => item.id)) : 0;
    const newId = lastId + 1;

    // Adiciona o novo item com o campo id
    const newData = { id: newId, ...formData };

    // Adiciona os novos dados no arquivo JSON
    data.push(newData);

    // Salva os dados de volta no arquivo
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");

    // Retorna uma resposta de sucesso
    return NextResponse.json({ message: "Formulário enviado com sucesso e dados salvos!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
    return NextResponse.json({ message: "Erro ao salvar o formulário. Tente novamente mais tarde." }, { status: 500 });
  }
}
