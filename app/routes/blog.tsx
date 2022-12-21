import type { MetaFunction } from "@remix-run/node";
import { Meta, Outlet } from "@remix-run/react";
import Navbar from "~/components/Layout/Navbar/Navbar";
import { getSeo, getSeoMeta, getSeoLinks } from "~/components/utils/seo";

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
