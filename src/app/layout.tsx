import "./globals.css";
import NavBar from "@/components/NavBar";
import MarginWidthWrapper from "@/components/MarginWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex">
          <NavBar />
          <main className="flex-1">
            <MarginWidthWrapper>{children}</MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
