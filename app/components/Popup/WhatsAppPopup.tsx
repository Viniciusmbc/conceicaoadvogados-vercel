import { whatsappIcon } from "../common/Icons";

export default function WhatsAppPopup() {
  return (
    <div className=" fixed w-fit bottom-0 inset-x-0 mx-auto   md:top-auto md:bottom-0 md:left-auto md:right-0 z-50 md:my-6 flex md:w-96 rounded-3xl">
      <a
        className=" border-green text-green hover:border-gold flex  items-center justify-center gap-x-1 border  bg-[#3D3638] px-6 py-3 text-xl font-bold text-[#25d366]  hover:text-deer "
        href={
          "https://wa.me/5555992560707?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className=" animate-pulse text-[#25d366] md:block">
          {whatsappIcon}
        </span>
        Fale com um advogado agora!
      </a>
    </div>
  );
}
