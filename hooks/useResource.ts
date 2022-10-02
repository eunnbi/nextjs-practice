import { useQuery } from "react-query";

export default function useResource<T>(resource: {
  key: any;
  fetcher: () => Promise<T>;
}) {
  return useQuery<T>(resource.key, resource.fetcher);
}

export function createResource<T, P extends object>(resource: {
  key: any;
  fetcher: (param: P) => Promise<T>;
}) {
  return { key: resource.key, fetcher: resource.fetcher };
}
