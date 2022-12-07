import type {EntryContext} from '@remix-run/node'
import { generateRobotsTxt } from "@balavishnuvj/remix-seo";
import {getSitemapXml} from "../components/utils/sitemap.server"

type Handler = (request: Request, remixContext: EntryContext) => Promise<Response | null> | null;

const pathedRoutes: Record<string, Handler> = {
  "/sitemap.xml": async (request, remixContext) => {
    const sitemap = await getSitemapXml(request, remixContext);
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": String(Buffer.byteLength(sitemap)),
      },
    });
  },
};

const routes: Array<Handler> = [
  ...Object.entries(pathedRoutes).map(([path, handler]) => {
    return (request: Request, remixContext: EntryContext) => {
      if (new URL(request.url).pathname !== path) return null;

      return handler(request, remixContext);
    };
  }),
];

export const otherRootRoutes: Record<string, Handler> = {
  "/robots.txt": async () => {
    return generateRobotsTxt([
      { type: "sitemap", value: "https://conceicaoadvogados.com.br/sitemap.xml" },
    ]);
  },
};


export { routes, pathedRoutes };



