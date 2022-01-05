import useSWR from "swr";
import { fetcher } from "../api/fetcher";

const useCompositionSwr = (prefCode: number) => {
  const { data, error } = useSWR(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(
      prefCode
    )}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useCompositionSwr };
