import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-secundaryBlue mx-auto flex w-full items-center justify-between gap-5 px-4 py-6">
      <Image src="/images/logo-ons-desktop.png" alt="Logo" width={100} height={100} priority={false} />
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/"
            className="border-tertiaryBlue flex w-full flex-row items-center rounded-lg border-2 p-2 font-bold"
          >
            <span className="flex flex-1 items-center justify-center gap-2 text-xl font-semibold text-white">
              Tabular
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/calendario"
            className="border-tertiaryBlue flex w-full flex-row items-center rounded-lg border-2 p-2 font-bold"
          >
            <span className="flex flex-1 items-center justify-center gap-2 text-xl font-semibold text-white">
              Calendário
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/cadastrar"
            className="border-tertiaryBlue flex w-full flex-row items-center rounded-lg border-2 p-2 font-bold"
          >
            <span className="flex flex-1 items-center justify-center gap-2 text-xl font-semibold text-white">
              Cadastrar
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
