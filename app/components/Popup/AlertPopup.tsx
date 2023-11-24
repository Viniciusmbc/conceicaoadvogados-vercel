import React, { useRef, useEffect, FC } from 'react';
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
      <div className="flex justify-between items-center p-5 rounded-t border-b">
        {exclamationIcon}
        <h3 className="text-xl font-medium text-gray-900">
          Atenção: WhatsApp Clonado!
        </h3>
      </div>
      <div className="p-5">
        <p>Recebemos informações de que nosso WhatsApp foi clonado. Por favor, esteja ciente de que nosso escritório de advocacia possui apenas um número oficial de WhatsApp. Não realizamos pedidos de dinheiro ou cobranças fora dos canais oficiais de comunicação.</p>
        {images && images.length > 0 && (
          <div className="mt-4">
            <p>Fotos do número clonado:</p>
            {images.map((img, index) => (
              <img key={index} src={img} alt="WhatsApp clonado" className="mt-2" />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end items-center p-5 rounded-b border-t">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md hover:bg-red-700">
          Fechar
        </button>
      </div>
    </dialog>
  );
};

export default AlertPopup;
