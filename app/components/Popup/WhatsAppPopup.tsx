import { Link } from "@remix-run/react";
import { whatsappIcon } from "../common/Icons";

export default function WhatsAppPopup() {
  return (
    <div className=" fixed  top-auto bottom-0 left-auto right-0 z-50 my-6 flex w-96 rounded-3xl">
      <Link
        to="/"
        className=" border-green text-green hover:border-gold flex  items-center justify-center gap-x-1 border  bg-[#3D3638] px-6 py-3 text-xl font-bold text-[#25d366]  hover:text-deer "
      >
        <span className=" animate-pulse text-[#25d366] md:block">
          {whatsappIcon}
        </span>
        Fale com um advogado agora!
      </Link>
    </div>
  );
}
