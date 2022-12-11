import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
} from "@remix-run/react";
import React from "react";
import Footer from "./components/Layout/Footer/Footer";
import WhatsAppPopup from "./components/Popup/WhatsAppPopup";
import styles from "./styles/app.css";

let isMount = true;

export const handle = { hydrate: true };

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "canonical",
      href: "https://www.conceicaoadvogados.com.br/",
      hreflang: "pt-br",
    },
    { rel: "manifest", href: "/resources/manifest.webmanifest" },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Conceição Advogados",
  description:
    "Somos um escritório de advocacia especializado em Direito do Trabalho, Direito Previdênciário, Direito Penal e Direito Civil.",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  let location = useLocation();
  let matches = useMatches();

  React.useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
    }
  }, [location, matches]);

  return (
    <html lang="pt-br">
      <head>
        <Meta /> <Links />
      </head>
      <body className=" max-w-[100vw] overflow-x-hidden">
        <main>
          <WhatsAppPopup /> <Outlet />
        </main>
        <Footer /> <ScrollRestoration /> <Scripts /> <LiveReload />
      </body>
    </html>
  );
}
