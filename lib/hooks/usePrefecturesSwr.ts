import useSWR from "swr";
import { fetcher } from "../api/fetcher";

const usePrefecturesSwr = () => {
  const { data, error } = useSWR(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { usePrefecturesSwr };
