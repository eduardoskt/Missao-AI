const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é a favor da legalização da maconha?",
        alternativas: [
            {
                texto: "Sim, com certeza!",
                afirmacao: "Não, nunca!!! "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Imagine a seguinte situação: um amigo proximo lhe oferece maconha em um ambiente social, como uma festa ou reunião. O que você faria?",
        alternativas: [
            {
                texto: "Sem dúvidas, aceitaria! Me aproximaria da pessoa que me ofereceu para garantir um uso contínuo da maconha",
                afirmacao: "Concerteza não, creio qu a maconha não ira trazer nehum beneficio só maleficios."
            },
            {
                texto: "Concerteza não, creio qu a maconha não ira trazer nehum beneficio só maleficios.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Caso a maconha seja legalizaad, você acredita que devera haver regulamentação rigida sobre onde e como ela pode ser consumida (ex:.. locais especificos  proibição em áreas públicas)?",
        alternativas: [
            {
                texto: "Sim, o uso da maconha deveria ser consumida em locais proprios como locais abertos e arejados",
                afirmacao: "Não, deveria ser liberada em qual quer lugar que o usuario deseja"
            },
            {
                texto: "Não, deveria ser liberada em qual quer lugar que o usuario deseja",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Você acredita que o uso recreativo de maconha por adolescentes pode ter impactos negativos em sua vida acadêmicas social?",
        alternativas: [
            {
                texto: "Sim, porque vaoi acabar afetando sua vida, po se tornar um vicio compulsivo",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Não, porque ele tera conciéncia sobre o lugar e hora devida de seu uso",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
