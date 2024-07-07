// import search from "../assets/icons/search.svg";
import shoppingCart from "../assets/icons/shoppingCart.svg";
// import user from "../assets/icons/user.svg";

import product1 from "../assets/images/product1.svg";
import product2 from "../assets/images/product2.svg";
import product3 from "../assets/images/product3.svg";
import product4 from "../assets/images/product4.svg";
import product5 from "../assets/images/product5.svg";
import product6 from "../assets/images/product6.svg";
import product7 from "../assets/images/product7.svg";
import product8 from "../assets/images/product8.svg";
import product9 from "../assets/images/product9.svg";
import product10 from "../assets/images/product10.svg";
import product11 from "../assets/images/product11.svg";
import product12 from "../assets/images/product12.svg";
import { Product } from "../types";

// NavLinks Array
export const NavLinks = [
  // {
  //   title: "Home",
  //   path: "/",
  // },
  {
    title: "Products",
    path: "/",
  },
  // {
  //   title: "About",
  //   path: "/about",
  // },
  // {
  //   title: "Contact",
  //   path: "/contact",
  // },
];

// NavIcon Array
export const NavIcon = [
  // {
  //   title: "search",
  //   icon: search,
  // },
  {
    title: "cart",
    icon: shoppingCart,
    path: "/cart",
  },
  // {
  //   title: "profile",
  //   icon: user,
  // },
];

// Products Array
export const products: Product[] = [
  {
    id: 1,
    name: "Summer Retro Glasses",
    image: product1,
    price: 10000,
    quantity: 5,
    isFavorite: false,
    color: "black",
    material: "plastic",
  },
  {
    id: 2,
    image: product2,
    name: "Pink Circle Glasses",
    price: 15000,
    quantity: 5,
    isFavorite: false,
    color: "pink",
    material: "metal",
  },
  {
    id: 3,
    image: product3,
    name: "Summer Stylish Glasses",
    price: 15000,
    quantity: 5,
    isFavorite: false,
    color: "orange",
    material: "metal",
  },
  {
    id: 4,
    image: product4,
    name: "Classy Stylish Glasses",
    price: 10000,
    quantity: 5,
    isFavorite: false,
    color: "brown",
    material: "metal",
  },
  {
    id: 5,
    image: product5,
    name: "Retro Pink Glasses",
    price: 10000,
    quantity: 5,
    isFavorite: false,
    color: "pink",
    material: "plastic",
  },
  {
    id: 6,
    image: product6,
    name: "Cat Eyes Glasses",
    price: 15000,
    quantity: 5,
    isFavorite: false,
    color: "pink",
    material: "plastic",
  },
  {
    id: 7,
    image: product7,
    name: "Summer Heart Glasses",
    price: 15000,
    quantity: 5,
    isFavorite: false,
    color: "pink",
    material: "plastic",
  },
  {
    id: 8,
    image: product8,
    name: "Summer Star Glasses",
    price: 10000,
    quantity: 5,
    isFavorite: false,
    color: "pink",
    material: "plastic",
  },
  {
    id: 9,
    image: product9,
    name: "Summer Retro Glasses",
    price: 10000,
    quantity: 5,
    isFavorite: false,
    color: "black",
    material: "plastic",
  },
  {
    id: 10,
    image: product10,
    name: "Gold Circle Glasses",
    price: 15000,
    quantity: 5,
    isFavorite: false,
    color: "brown",
    material: "plastic",
  },
  {
    id: 11,
    image: product11,
    name: "Summer Stylish Glasses",
    price: 15000,
    quantity: 5,
    isFavorite: false,
    color: "brown",
    material: "plastic",
  },
  {
    id: 12,
    image: product12,
    name: "Fashion Stylish Glasses",
    price: 10000,
    quantity: 5,
    isFavorite: false,
    color: "pink",
    material: "plastic",
  },
];
