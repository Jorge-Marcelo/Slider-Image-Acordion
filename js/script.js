const images = document.querySelectorAll(".image");
const itens = [
"assets/img/1.png",
"assets/img/2.png",
"assets/img/3.png",
"assets/img/4.png",
"assets/img/5.png",
"assets/img/6.png",
"assets/img/7.png",
"assets/img/8.png",
"assets/img/9.png",
];

let tipoDispositivo = "";
let tipo = {
mouse: {
start: "mouseover",
end: "mouseout",
},

touch: {
start: "touchstart",
end: "touchend",
},
};

const Dispositivo = () => {
try {
document.createEvent("TouchEvent");
tipoDispositivo = "touch";
return true;
} catch (e) {
tipoDispositivo = "mouse";
return false;
}
};

// Chame a função Dispositivo após definição
Dispositivo();

images.forEach((image, index) => {
let img = document.createElement("img");
img.setAttribute("src", itens[index]); // Use 'itens' em vez de 'images'
img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "cover";
image.appendChild(img);

image.style.flex = "1";
image.style.transition = "flex 0.8s ease";

image.addEventListener(tipo[tipoDispositivo].start, () => {
image.style.flex = "9"; // Defina flex corretamente
});

image.addEventListener(tipo[tipoDispositivo].end, () => {
image.style.flex = "1"; // Defina flex corretamente
});
});
