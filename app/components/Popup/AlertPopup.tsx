import React, { useRef, useEffect, FC } from 'react';
import { exclamationIcon } from '../common/Icons';

// Definindo o tipo para as props
interface AlertPopupProps {
  isOpen: boolean;
  images: string[]; // Supondo que 'images' seja um array de URLs de imagens
  onClose: () => void;
}

const AlertPopup: FC<AlertPopupProps> = ({ isOpen, images, onClose }) => {


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-xl md:w-[80%]">
      <div className="flex justify-between items-center p-5 rounded-t border-b">
       {exclamationIcon}
        <h3 className="text-xl font-extrabold text-red-500 ">
          Atenção: WhatsApp Clonado!
        </h3>
      </div>
      <div className="p-5">
        <p>Recebemos informações de que nosso <b>WhatsApp foi clonado</b>. Por favor, esteja ciente de que nosso escritório de advocacia possui apenas um número oficial de WhatsApp. Não realizamos pedidos de dinheiro ou cobranças fora dos canais oficiais de comunicação.</p>
        <b>Fotos do número de WhatsApp que está se passando por nosso Escritório:</b>
        {images && images.length > 0 && (
          <div className="mt-4 flex  justify-center items-center">
           
            {/* Renderizar as imagens */}
            {images.map((img, index) => (
              <img key={index} src={img} alt="WhatsApp clonado" className="mt-2 flex justify-center items-center  w-[30%] max-w-full" />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center p-5 rounded-b border-t">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md hover:bg-red-700">
          Fechar
        </button>
      </div>
    </div>
  </div>
  );
};

export default AlertPopup;
