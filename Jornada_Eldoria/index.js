//Aquivo principal que inicializa o jogo
import { atualizarUI } from "./ui.js";
import { reiniciarJogo } from "./jogo.js";

document.getElementById("restart").addEventListener("click", reiniciarJogo);

atualizarUI();