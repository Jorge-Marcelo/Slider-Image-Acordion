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

Dispositivo();

images.forEach((image, index) => {
let img = document.createElement("img");
img.setAttribute("src", itens[index]);
img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "cover";
image.appendChild(img);

image.style.flex = "1";
image.style.transition = "flex 0.8s ease";

image.addEventListener(tipo[tipoDispositivo].start, () => {
image.style.flex = "9";
});

image.addEventListener(tipo[tipoDispositivo].end, () => {
image.style.flex = "1";
});
});

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink) {
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function () {
threads(threadsLink);
});

/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink) {
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function () {
linkedin(linkedinLink);
});

/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink) {
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function () {
github(githubLink);
});
