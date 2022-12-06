import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Layout/Navbar/Navbar";

export default function Others() {
  return (
    <>
      <Navbar navbar={false} />
      <>
        <Outlet />
      </>
    </>
  );
}
