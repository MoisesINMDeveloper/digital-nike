import data,{type ContactItem} from '../../constant/data';

const Footer=() => {
    return (
        <footer className="bg-fourth text-white py-4 border-t-2 border-brown shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-white">
                        <h1 className="text-xl font-bold">Digital Nike</h1>
                        <p className="mt-1 text-sm">La mejor tienda del pais y el mundo</p>
                    </div>
                    <div className="text-brown-500 text-sm">
                        <p>&copy; 2024 Digital Nike. Todos los derechos reservados.</p>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                        <ul className=" flex flex-row justify-between">
                            {data?.contactData.map((item: ContactItem,index: number) => (
                                <li key={index} className="p-2 flex text-yellow active:text-red items-center gap-4">
                                    {item.icon&&<item.icon className="mr-2 h-8 w-8" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
