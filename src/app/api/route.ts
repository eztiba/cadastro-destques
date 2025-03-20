import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  try {
    // Caminho absoluto para o arquivo JSON
    const filePath = path.join(process.cwd(), "src", "data", "destaques.json");

    // Lendo o arquivo JSON
    const data = await fs.readFile(filePath, "utf-8");

    // Parse do JSON
    const jsonData = JSON.parse(data);

    return new Response(JSON.stringify(jsonData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Erro ao ler o arquivo JSON", error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    // Ler o conteúdo do arquivo JSON
    const filePath = path.join(process.cwd(), "src", "data", "destaques.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);

    // Filtra os dados para remover o item com o ID especificado
    const updatedData = jsonData.filter((item: { id: number }) => item.id !== Number(id));

    // Se o tamanho dos dados não mudar, significa que não foi encontrado o item
    if (updatedData.length === jsonData.length) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Escrever os dados modificados de volta ao arquivo
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: `Internal server error - delete: ${error}` }, { status: 500 });
  }
}
