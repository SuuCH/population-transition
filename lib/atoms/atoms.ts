import { atom } from "recoil";
import { GraphData } from "../../types/prefectures";

export const graphDataState = atom({
  key: "graphData",
  default: [] as GraphData[],
});
