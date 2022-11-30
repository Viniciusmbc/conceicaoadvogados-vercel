import { Link } from "react-router-dom";

export default function Popup() {
  return (
    <dialog>
      <h1>Você não precisa sair de casa para falar com seu advogado!</h1>
      <Link to="/">Clique aqui</Link> e entre em contato pelo nosso WhatsApp!
    </dialog>
  );
}
