//Manipula o DOM e a interface do usuário
import { fases } from "./fases.js";
import { vidas, faseAtual, escolherOpcao, reiniciarJogo } from "./jogo.js";

export function atualizarUI() {
    const fase = fases[faseAtual];
    
    document.getElementById("story").textContent = fase.texto;
    document.getElementById("vidas").textContent = `${vidas}`;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    fase.opcoes.forEach((opcao, index) => {
        const button = document.createElement("button");
        button.textContent = opcao.texto;
        button.onclick = () => escolherOpcao(index);
        button.classList.add("choice-button");
        choicesDiv.appendChild(button);
    });

    document.getElementById("restart").style.display = fase.opcoes.length === 0 ? "block" : "none";
}

export function mostrarGameOver() {
    document.getElementById("story").textContent = "Fim da jornada... tente novamente!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("restart").style.display = "block";
}