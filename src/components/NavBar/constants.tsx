import { SideNavItem } from "@/types/sizeNavBar";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Principais Destques",
    path: "/",
    submenu: true,
    subMenuItems: [
      { title: "Calendário", path: "/" },
      { title: "Tabular", path: "/tabular" },
    ],
  },
  {
    title: "Cadastro de Destaques",
    path: "/cadastro",
  },
];
