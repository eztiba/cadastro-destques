export type Destaques = {
  id: number;
  responsavel: string;
  projeto: string;
  reuniao: string;
  data: string;
  hora: string;
  detalhes?: string;
};
export type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  responsavel?: string;
  projeto?: string;
  detalhes?: string;
};
