import {FaShopify} from "react-icons/fa";
import {useCart} from '../../hooks/useCart';

const IconBurger=({onClick,productCount}: {onClick: () => void; productCount: number;}) => {
    const {getTotalItems}=useCart();

    return (
        <div>
            <button className="w-auto h-auto " onClick={onClick}>
                <FaShopify className="mr-2 w-6 h-6 active:text-green text-yellow" />
            </button>
            {productCount>0&&(
                <span className="absolute text-white top-2 right-4  bg-bgtransparent rounded-full w-4 h-4 text-xs flex items-center justify-center font-bold">
                    {getTotalItems()}
                </span>
            )}
        </div>
    );
}

export default IconBurger;
