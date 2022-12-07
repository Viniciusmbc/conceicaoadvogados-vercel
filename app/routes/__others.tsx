import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Layout/Navbar/Navbar";

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
