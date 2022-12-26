import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

export const getAbsoluteUrl = (
  req: IncomingMessage & { cookies: NextApiRequestCookies }
) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["x-forwarded-host"] || req.headers["host"];
  const url = `${protocol}://${host}`;
  return url;
};
