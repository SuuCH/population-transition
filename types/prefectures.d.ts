interface Prefecture {
  prefCode: number;
  prefName: string;
}
interface Composition {
  year: number;
  value: number;
}

interface GraphData {
  prefName: string;
  data: Composition[];
}

export type { Prefecture, Composition, GraphData };
