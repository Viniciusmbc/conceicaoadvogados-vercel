import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Layout/Footer/Footer";
import WhatsAppPopup from "./components/Popup/WhatsAppPopup";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Conceição Advogados",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>

      <body className=" max-w-[100vw] overflow-x-hidden">
        <main>
          <WhatsAppPopup />
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
