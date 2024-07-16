
const CartTotal=({total}: {total: number;}) => (
    <div className="mt-4 flex flex-row justify-between">
        <h3 className="text-lg font-bold text-texto">Monto</h3>
        <span>${total.toFixed(2)}</span>
    </div>
);

export default CartTotal;
