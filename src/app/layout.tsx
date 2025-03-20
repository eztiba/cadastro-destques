import "./globals.css";
import NavBar from "@/components/NavBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex h-screen flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
