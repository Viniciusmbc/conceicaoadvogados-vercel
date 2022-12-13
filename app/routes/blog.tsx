import type { MetaFunction } from "@remix-run/node";
import { Meta, Outlet } from "@remix-run/react";
import Navbar from "~/components/Layout/Navbar/Navbar";
import { getSeo, getSeoMeta, getSeoLinks } from "~/components/utils/seo";

// No need for route data? Get meta and links in one call.
export let [seoMeta, seoLinks] = getSeo({
  title: "Blog do Conceição Advogados",
  description:
    "Acompanhe nossas Publicações sobre Direito Previdenciário, Direito do Trabalho, Direito Penal e outras Áreas do Direito!",
});

export default function Blog() {
  return (
    <>
      <Navbar navbar={false} />
      <>
        <Outlet />
      </>
    </>
  );
}
