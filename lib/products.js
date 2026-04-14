export const products = [
  {
    id: 1,
    name: "CK Euphoria",
    brand: "Calvin Klein",
    price: 190630,
    sizes: null,
    description: "Una fragancia oriental floral, sensual y misteriosa. Notas de granada, loto y caoba.",
    image: "/products/ck-euphoria.jpg"
  },
  {
    id: 2,
    name: "Eternity EDT",
    brand: "Calvin Klein",
    price: 190630,
    sizes: null,
    description: "Fresca y romántica, con notas de lirio de los valles, salvia y madera de sándalo.",
    image: "/products/ck-eternity-edt.jpg"
  },
  {
    id: 3,
    name: "Eternity EDP",
    brand: "Calvin Klein",
    price: 218000,
    sizes: null,
    description: "La versión intensa del clásico. Notas florales profundas con corazón de jazmín y fondo amaderado.",
    image: "/products/ck-eternity-edp.jpg"
  },
  {
    id: 4,
    name: "Eternity Flame",
    brand: "Calvin Klein",
    price: 207000,
    sizes: null,
    description: "Ardiente y apasionado. Notas cítricas de pomelo, flor de naranja y ámbar.",
    image: "/products/ck-eternity-flame.jpg"
  },
  {
    id: 5,
    name: "Cool Water EDT",
    brand: "Davidoff",
    price: null,
    sizes: [
      { ml: "30ml", price: 92800 },
      { ml: "50ml", price: 130680 },
      { ml: "100ml", price: 163350 },
      { ml: "125ml", price: 182000 }
    ],
    description: "El icónico aroma marino masculino. Notas acuáticas de menta, lavanda y madera de cedro.",
    image: "/products/davidoff-cool-water.jpg"
  },
  {
    id: 6,
    name: "Cool Water Parfum",
    brand: "Davidoff",
    price: 179685,
    sizes: null,
    description: "La versión parfum del legendario Cool Water. Más concentrado, más duradero, más intenso.",
    image: "/products/davidoff-cool-water-parfum.jpg"
  },
  {
    id: 7,
    name: "Cuba Las Vegas",
    brand: "Cuba",
    price: 23290,
    sizes: null,
    description: "Fragancia fresca y vibrante inspirada en la energía de Las Vegas. Ideal para el día.",
    image: "/products/cuba-las-vegas.jpg"
  },
  {
    id: 8,
    name: "Cuba Royal",
    brand: "Cuba",
    price: 33990,
    sizes: null,
    description: "Lujoso y elegante, con notas de bergamota, rosa y almizcle. Royalmente sofisticado.",
    image: "/products/cuba-royal.jpg"
  },
  {
    id: 9,
    name: "Cuba Winner",
    brand: "Cuba",
    price: 33990,
    sizes: null,
    description: "Fragancia deportiva y moderna. Notas cítricas y amaderadas para el hombre activo.",
    image: "/products/cuba-winner.jpg"
  },
  {
    id: 10,
    name: "Danielle Boy",
    brand: "Cannon",
    price: 14900,
    sizes: null,
    description: "Fresco y juvenil, perfecto para el uso diario. Notas cítricas y amaderadas suaves.",
    image: "/products/danielle-boy.jpg"
  }
];

export const brands = ["All", "Calvin Klein", "Davidoff", "Cuba", "Cannon"];

export const formatPrice = (price) => {
  if (!price) return "N/A";
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};
