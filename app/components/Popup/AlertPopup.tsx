import type { FC } from 'react';
import React, { useRef, useEffect } from 'react';
import { exclamationIcon } from '../common/Icons';

// Definindo o tipo para as props
interface AlertPopupProps {
  isOpen: boolean;
  images: string[]; // Supondo que 'images' seja um array de URLs de imagens
  onClose: () => void;
}

const AlertPopup: FC<AlertPopupProps> = ({ isOpen, images, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="rounded-md p-5 bg-white shadow-xl">
      <div className="flex justify-center items-center p-5 rounded-t border-b">
        {exclamationIcon}
        <b className="text-2xl text-[#CB2C31]"> Atenção:</b>
        <h3 className="text-4xl text-[#CB2C31] font-medium ml-2">
          Nosso <span className='text-[#075e54] font-extrabold'>WhatsApp</span> <b>foi</b>  Clonado!
        </h3>
      </div>
      <div className="p-5 space-y-4 text-lg"> {/* Adicionado espaço entre parágrafos */}
        <p >Recebemos informações de que nosso WhatsApp foi clonado.</p>
        <p>Por favor, esteja ciente de que nosso escritório de advocacia possui apenas um número oficial de WhatsApp (+55 55 99256-0707).</p>
        <p>Se você receber uma mensagem de um número diferente, fazendo pedidos de dinheiro ou passando qualquer tipo de informação, <b>não responda</b> e entre em contato conosco <b>imediatamente</b>.</p>
        <p>Estamos trabalhando para resolver o problema o mais rápido possível.</p>

        <p>Imagens do número de WhatsApp que está se passando pelo nosso escritório:</p>
        {images && images.length > 0 && (
          <div className="mt-4 flex flex-col md:flex-row justify-around">
            {images.map((img, index) => (
              <img key={index} src={img} alt="WhatsApp clonado" className="mt-2 w-52 max-w-full" />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end items-center p-5 rounded-b border-t">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#CB2C31] text-white text-base font-medium rounded-md hover:bg-[#FFF] hover:text-black">
          Fechar
        </button>
      </div>
    </dialog>
  );
};

export default AlertPopup;
