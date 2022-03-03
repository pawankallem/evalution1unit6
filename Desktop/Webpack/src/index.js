

import { multi, add } from "./check";

import ("./index.css");

import img from './Masai_Logo.jpg';

console.log(multi(4, 5))

console.log(add(20, 30));

const img1=document.createElement("img");
img1.src=img;
img1.classList.add("imgCss")


const h1 = document.createElement("h1");
h1.innerText = `Hello webPack ${multi(4, 5)}`;
h1.classList.add("red")

let div=document.createElement("div");
div.classList.add("logoAndContent")

div.append(img1,h1);


document.getElementById("img").appendChild(div);