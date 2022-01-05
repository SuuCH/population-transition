export const fetcher = (url: string) =>
  fetch(url, {
    headers: { "X-API-KEY": process.env.X_API_KEY } as HeadersInit,
  }).then((res) => res.json());
