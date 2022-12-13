import type { MetaFunction } from "@remix-run/node";
import { Meta, Outlet } from "@remix-run/react";
import Navbar from "~/components/Layout/Navbar/Navbar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Blog do Conceição Advogados",
  description:
    "Publicações sobre Direito Penal, Previdenciário (INSS), trabalhadores CLT, FGTS, imóveis, contratos, entre outros temas.",
  viewport: "width=device-width,initial-scale=1",
});

export default function Blog() {
  return (
    <>
      <head>
        <Meta />
      </head>
      <Navbar navbar={false} />
      <>
        <Outlet />
      </>
    </>
  );
}
