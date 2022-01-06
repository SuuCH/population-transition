export const fetcher = (url: string) =>
  fetch(url, {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY } as HeadersInit,
  }).then((res) => res.json());
