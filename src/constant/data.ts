import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
export interface PayDates {
  bank: string;
  code: string;
  cedula: string;
  phone: string;
}
export interface ContactItem {
  name: string;
  link: string;
  icon: IconType;
}
const data: {
  categories: Category[];
  paydates: PayDates;
  contactData: ContactItem[];
} = {
  categories: [
    {
      id: 1,
      name: "Camisas",
      products: [
        {
          id: 1,
          title: "Nike Just do it",
          price: 14.99,
          images: ["/shirt/red.jfif", "/shirt/shirtnike.jfif"],
          description:
            "Franela Nike Just do it colores variedad de colores y tallas desde S hasta 2XL.",
        },
        {
          id: 2,
          title: "Sweatshirt",
          price: 19.99,
          images: [
            "/shirt/justdoit.jfif",
            "/shirt/yournameorange.jfif",
            "/shirt/sweatshirt.jfif",
          ],
          description:
            "Sueter Nike con distintos colores y tamaños desde M hasta 4XL.",
        },
      ],
    },
    {
      id: 2,
      name: "Zapatos",
      products: [
        {
          id: 1,
          title: "Jordan Retro 4",
          price: 69.99,
          images: ["/shoes/jordan-retro.jfif", "/shoes/retro4.jfif"],
          description:
            "Jordan retro 4 en color blaco y azul y blanco con negro, contamos con tallas desde 37 hasta 42.",
        },
        {
          id: 2,
          title: "Jordan Retro 1",
          price: 89.99,
          images: [
            "/shoes/retro-gris.jfif",
            "/shoes/retro1bw.jfif",
            "/shoes/retro1rb.jfif",
          ],
          description:
            "Clasicas Retro 1 con variedad de colores y tallas, disponibles para damas y caballeros.",
        },
        {
          id: 3,
          title: "New Balance",
          price: 49.99,
          images: ["/shoes/NBalance.jfif"],
          description:
            "Zapatos deportivos new balance, hechos para el deporte no te quedes sin ellos.",
        },
      ],
    },
    {
      id: 3,
      name: "Short",
      products: [
        {
          id: 1,
          title: "Short Chicago Bulls",
          price: 24.99,
          images: ["/short/bulls.jfif"],
          description:
            "Short de chicago bulls con variedad de colores y tallas.",
        },
        {
          id: 2,
          title: "Short Nike",
          price: 24.99,
          images: ["/short/nikebw.jfif"],
          description: "Short Nike con variedad de colores y tallas.",
        },
        {
          id: 3,
          title: "Short Nike Running",
          price: 24.99,
          images: ["/short/nikerunning.jfif", "/short/nikewhite.jfif"],
          description: "Short Nike con variedad de colores y tallas.",
        },
      ],
    },
    {
      id: 4,
      name: "Gorras",
      products: [
        {
          id: 1,
          title: "Gorra Adidas",
          price: 14.99,
          images: ["/bag/adidas.jfif"],
          description:
            "Gorras originales de la marca adidas en diferentes tallas y colores.",
        },
        {
          id: 2,
          title: "Gorra Boston Letter",
          price: 14.99,
          images: ["/bag/bostonletter.jfif"],
          description:
            "Gorras originales de la marca Bosto Letter en diferentes tallas y colores.",
        },
        {
          id: 3,
          title: "Gorra Air Jordan",
          price: 14.99,
          images: ["/bag/jordanbag.jfif"],
          description:
            "Gorras originales de la marca Jordan  en diferentes tallas y colores.",
        },
        {
          id: 4,
          title: "Gorra Yankees",
          price: 14.99,
          images: ["/bag/snapback.jfif"],
          description:
            "Gorras originales de la marca MLB en diferentes tallas y colores.",
        },
      ],
    },
    {
      id: 5,
      name: "Reloj",
      products: [
        {
          id: 1,
          title: "Reloj Casio",
          price: 9.99,
          images: ["/reloj/casio.jfif", "/reloj/versace.jfif"],
          description:
            "Reloj marca Casio resistente al agua con incrustaciones de cuarzo y safiro.",
        },
        {
          id: 2,
          title: "Reloj Mulco",
          price: 9.99,
          images: ["/reloj/relojbw.jfif"],
          description:
            "Reloj marca Mulco resistente al agua con incrustaciones de Oxigeno  y Criptoninta.",
        },
        {
          id: 3,
          title: "Reloj SportChronos",
          price: 9.99,
          images: ["/reloj/relojdeportivobb.jfif", "/reloj/simple.jfif"],
          description:
            "Reloj marca SportChronos resistente al agua con incrustaciones de tiempo indefinido, resistente al analogico y al digital, el tiempo nunca se para.",
        },
        {
          id: 4,
          title: "Reloj Richard Mille",
          price: 9.99,
          images: [
            "/reloj/relojmasculino.jfif",
            "/reloj/relojwhite.jfif",
            "/reloj/relojyolako.jfif",
          ],
          description:
            "Reloj marca Richar Milli resistente al agua con incrustaciones de cuarzo y safiro, para ocasiones elegantes.",
        },
      ],
    },
  ],
  paydates: {
    bank: "Venezuela",
    code: "0102",
    cedula: "24685881",
    phone: "04124676968",
  },
  contactData: [
    {
      name: "Digital Nike",
      link: "https://www.instagram.com/mostazaburger",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp Nike",
      link: "https://wa.me/4124676968",
      icon: FaWhatsapp,
    },
  ],
};

export default data;
