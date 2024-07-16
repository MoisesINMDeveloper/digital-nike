import {useState,ChangeEvent} from 'react';
import {IoMdCopy} from 'react-icons/io';
import data,{PayDates} from '../../constant/data';
import InfoRow from '../atoms/common/InfoRow';
import Button from '../atoms/common/Button';

interface PaymentModalProps {
    total: number;
    onConfirm: (referenceNumber: string) => void;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps>=({total,onConfirm,onClose}: PaymentModalProps) => {
    const {bank,code,cedula,phone}: PayDates=data.paydates;
    const [referenceNumber,setReferenceNumber]=useState('');

    const handleCopy=(): void => {
        const textToCopy=`
            Banco: ${bank}
            Código: ${code}
            Cedula: ${cedula}
            Teléfono: ${phone}
            Monto: ${total.toFixed(2)}
        `;
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bgtransparent  ">
            <div className=" w-screen border-2 border-border text-primary bg-gray-300 p-4 rounded-lg shadow-lg">
                <div className='flex flex-row justify-between items-center text-tertiary'>
                    <h2 className="text-xl font-bold mb-4">Información de Pago</h2>
                    <IoMdCopy className='mb-4 w-6 h-6 cursor-pointer active:text-brown' onClick={handleCopy} />
                </div>
                <InfoRow label="Banco" value={bank} />
                <InfoRow label="Codigo" value={code} />
                <InfoRow label="Cedula" value={cedula} />
                <InfoRow label="Telefono" value={phone} />
                <InfoRow label="Monto" value={`$${total.toFixed(2)}`} />
                <input
                    type="text"
                    value={referenceNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setReferenceNumber(e.target.value)}
                    placeholder="Número de referencia"
                    className="w-full p-2 mt-4 mb-4 border rounded border-border bg-transparent outline-none"
                />
                <div className="flex justify-center space-x-2">
                    <Button onClick={(): void => onConfirm(referenceNumber)} label="Confirmar" color=" active:bg-primary text-white" />
                    <Button onClick={onClose} label="Cancelar" color="bg-secundary active:bg-fourth text-white" />
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
