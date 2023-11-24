import React, { useRef, useEffect, FC } from 'react';
import { exclamationIcon } from '../common/Icons';

// Definindo o tipo para as props
interface AlertPopupProps {
  isOpen: boolean;
  images: string[]; // Supondo que 'images' seja um array de URLs de imagens
  onClose: () => void;
}

const AlertPopup: FC<AlertPopupProps> = ({ isOpen, images, onClose }) => {

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-xl md:w-1/3">
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
            <p>Fotos do número de WhatsApp que está se passando por nosso escritório:</p>
            {/* Renderizar as imagens */}
            {images.map((img, index) => (
              <img key={index} src={img} alt="WhatsApp clonado" className="mt-2 flex justify-center items-center" />
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
    </div>
  </div>
  );
};

export default AlertPopup;
