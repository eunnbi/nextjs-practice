import { useRouter } from "next/router";

export const useBack = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return { goBack };
};
