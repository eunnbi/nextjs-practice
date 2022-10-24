import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { MutableRefObject, useEffect } from "react";

export const useInfiniteScroll = <T>({
  hasNextPage,
  fetchNextPage,
  ref,
}: {
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<T, unknown>>;
  ref: MutableRefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    if (!hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    });
    const el = ref && ref.current;
    if (!el) return;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [hasNextPage, ref.current]);
};
