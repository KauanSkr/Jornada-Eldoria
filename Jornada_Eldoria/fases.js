 //Mantém as fases do jogo
export const fases = [
    //fase0
    {
        texto: "Você é um aventureiro em busca da lendária Coroa das Sombras. Para encontrá-la, precisa tomar decisões sábias ao longo de cinco desafios. Escolha errado e será obrigado a recomeçar!",
        opcoes: [{ texto: "Começar aventura", proximaFase: 1 }]
    },
    //fase1
    {
        texto: "Você inicia sua jornada em uma floresta densa e encontra um ancião misterioso que oferece duas direções.",
        opcoes: [
            { texto: "Seguir pela trilha iluminada pela lua.", proximaFase: 2 },
            { texto: "Entrar na caverna escura com runas brilhantes.", proximaFase: 3, perdeVida: true }
        ]
    },
    //fase2
    {
        texto: "A trilha leva a uma vila segura onde você pode obter informações.",
        opcoes: [{ texto: "Próxima fase", proximaFase: 4 }]
    },
    //fase3
    {
        texto: "A caverna está repleta de armadilhas! Você perde uma vida e volta ao início.",
        opcoes: [{ texto: "Tentar Novamente", proximaFase: 1 }]
    },
    //fase4
    {
        texto: "Na vila, um sábio lhe entrega um mapa e diz que apenas um símbolo revela a verdadeira localização da Coroa.",
        opcoes: [
            { texto: "O símbolo do sol.", proximaFase: 6, perdeVida: true },
            { texto: "O símbolo da lua.", proximaFase: 5 }
        ]
    },
    //fase5
    {
        texto: "O símbolo da lua revela um caminho oculto nas montanhas.",
        opcoes: [{ texto: "Próxima fase", proximaFase: 7 }]
    },
    //fase6
    {
        texto: "O símbolo do sol leva a um desfiladeiro sem saída. Você perde uma vida e volta ao início.",
        opcoes: [{ texto: "Tentar Novamente", proximaFase: 1 }]
    },
    //fase7
    {
        texto: "Ao escalar as montanhas, você se depara com um portão de pedra com duas alavancas. Apenas uma abre a passagem correta.",
        opcoes: [
            { texto: "A alavanca esquerda, marcada com um dragão.", proximaFase: 8 },
            { texto: "A alavanca direita, marcada com uma serpente.", proximaFase: 9, perdeVida: true }
        ]
    },
    //fase8
    {
        texto: "O dragão é um símbolo de proteção. O portão se abre!",
        opcoes: [{ texto: "Próxima fase", proximaFase: 10 }]
    },
    //fase9
    {
        texto: "A serpente ativa uma armadilha e você é jogado no abismo!",
        opcoes: [{ texto: "Tentar Novamente", proximaFase: 1 }]
    },
    //fase10
    {
        texto: "Dentro do templo, um espírito antigo bloqueia seu caminho. Ele diz: Aquele que busca a Coroa deve provar sua intenção. Como você responde?",
        opcoes: [
            { texto: "Busco poder para governar.", proximaFase: 12, perdeVida: true },
            { texto: "Busco proteger Eldoria das trevas.", proximaFase: 11 }
        ]
    },
    //fase11
    {
        texto: "O espírito permite sua passagem.",
        opcoes: [{ texto: "Próxima fase", proximaFase: 13 }]
    },
    //fase12
    {
        texto: "O espírito vê ambição em seu coração e expulsa você do templo!",
        opcoes: [{ texto: "Tentar Novamente", proximaFase: 1 }]
    },
    //fase13
    {
        texto: "Você finalmente encontra a Coroa das Sombras, mas há duas versões dela.",
        opcoes: [
            { texto: "A coroa prateada, brilhante como a lua.", proximaFase: 14 },
            { texto: "A coroa dourada, reluzente como o sol.", proximaFase: 15, perdeVida: true }
        ]
    },
    //fase14 
    {
        texto: "A coroa prateada é a verdadeira! Você salva Eldoria!",
        opcoes: [{ texto: "Proxima fase", proximaFase: 16 }]
    },
    //fase15
    {
        texto: "A coroa dourada é amaldiçoada! Você perde uma vida e volta ao início.",
        opcoes: [{ texto: "Tentar Novamente", proximaFase: 1 }]
    },
    //fase16
    {
        texto: "Parabéns! Você completou sua jornada com sucesso",
        opcoes: [
            { texto: "Voltar ao inicio", proximaFase: 0}
        ]
    }

];
