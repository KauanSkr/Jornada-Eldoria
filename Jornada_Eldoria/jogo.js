//Gerencia as vidas, fases e as escolhas
import { fases } from "./fases.js";
import { atualizarUI, mostrarGameOver } from "./ui.js";

export let vidas = 3;
export let faseAtual = 0;

export function escolherOpcao(indice) {
    const fase = fases[faseAtual];
    const escolha = fase.opcoes[indice];

    if (escolha.perdeVida) {
        vidas--;
        atualizarUI();
        
        if (vidas <= 0) {
            mostrarGameOver();
            return;
        }
    }

    faseAtual = escolha.proximaFase;
    atualizarUI();
}

export function reiniciarJogo() {
    vidas = 3;
    faseAtual = 0;
    atualizarUI();
}