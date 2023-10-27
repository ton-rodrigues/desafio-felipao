const prompt = require('prompt-sync')();

let dev  = "Tonzera"
let breakLine = "***********=====***********=====***********\n"
console.log("SALVE MUNDÃO (save big world)")

// começando o desafio

let nomeJogo = "ᴛᴜʀᴍᴀ ᴅᴏs ʜᴇʀᴏ́ɪs"

// saudação inicial

console.log(
    "\nOlá pessoa que gosta de aventura!\nSeja bem vinda ao jogo\n" +
    nomeJogo + "\n"

)
// prompt fictício - testando
let desejaContinuar = (prompt("Deseja continuar (S/n):"))


// tela com os nomes dos heróis

console.log(
    "\n\n***********=====***********=====***********\n" + 
    "             " + nomeJogo +
    "\n\n1 - Mônica\n2 - Cebolinha\n3 - Cascão\n4 - Magali\n5 - Chico Bento\n6 - Zé Esquecido\n7 - Do Contra\n8 - Franjinha" + "\n\n" + breakLine
    )
    


//matriz (array) com os heróis e sua XP

let herois = [
    ["Mônica" , 13000],
    ["Cebolinha" , 3000],
    ["Cascão" , 4000],
    ["Magali" , 8000],
    ["Chico Bento" , 3000],
    ["Zé Esquecido" , 9999],
    ["Do Contra" , 0],
    ["Franjinha" , 8000]
]

// declaração da variável nivelHeroi que vai puxar a partir da escolhaHeroi (usuário) a XP do Herói, dentro da matriz

let nivelHeroi = 0
let escolhaHeroi = Number(prompt("\nEscolha o número do Herói: "))

//essa linha precisei pedir ajuda ao chat GPT

if (escolhaHeroi >= 1 && escolhaHeroi <= herois.length) {
    nivelHeroi = herois[escolhaHeroi - 1][1];

//classificador dos heróis

if (nivelHeroi < 1000){
    nivelHeroi = "Ferro"
    }else if (nivelHeroi >= 1001 && nivelHeroi <= 2000){
        nivelHeroi = "Bronze"
    }else if (nivelHeroi >= 2001 && nivelHeroi <= 5000){
        nivelHeroi = "Prata"
    }else if (nivelHeroi >= 5001 && nivelHeroi <= 8000){
        nivelHeroi = "Platina"
    }else if (nivelHeroi >= 8001 && nivelHeroi <= 10000){
        nivelHeroi = "Ascendente"
    }else if (nivelHeroi >= 10001){
        nivelHeroi = "Imortal"}
}
   
// mensagem de saída, conforme escolha do usuário, incluindo mensagem de erro. 

    if (escolhaHeroi === 1){
            console.log("Sua heroína escolhida é a " + herois[0][0] + " e ela está no nível " + (herois[0][1] = nivelHeroi))
        }else if (escolhaHeroi === 2){
            console.log("Seu heroí escolhido é o " + herois[1][0] + " e ele está no nível " + (herois[1][1] = nivelHeroi))
        }else if (escolhaHeroi === 3){
            console.log("Seu heroí escolhido é o " + herois[2][0] + " e ele está no nível " + (herois[2][1] = nivelHeroi))
        }else if (escolhaHeroi === 4){
            console.log("Sua heroína escolhida é a " + herois[3][0] + " e ela está no nível " + (herois[3][1] = nivelHeroi))
        }else if (escolhaHeroi === 5){
            console.log("Seu heroí escolhido é o " + herois[4][0] + " e ele está no nível " + (herois[4][1] = nivelHeroi))
        }else if (escolhaHeroi === 6){
            console.log("Seu heroí escolhido é o " + herois[5][0] + " e ele está no nível " + (herois[5][1] = nivelHeroi))
        }else if (escolhaHeroi === 7){
            console.log("Seu heroí escolhido é o " + herois[6][0] + " e ele está no nível " + (herois[6][1] = nivelHeroi))
        }else if (escolhaHeroi === 8){
            console.log("Seu heroí escolhido é o " + herois[7][0] + " e ele está no nível " + (herois[7][1] = nivelHeroi))
    }
        else{
            console.log("Ainda não criamos esse herói! Escolha algum da lista")
    }
        


//créditos 🤓
console.log("\n\n\n\n" +breakLine +"𝙀𝙨𝙩𝙚 𝙟𝙤𝙜𝙤 𝙛𝙤𝙞 𝙙𝙚𝙨𝙚𝙣𝙫𝙤𝙡𝙫𝙞𝙙𝙤 𝙥𝙤𝙧 " + dev + " 𝙘𝙤𝙢 𝙖𝙥𝙤𝙞𝙤 𝙙𝙖 DIO 𝙚 𝙙𝙤 Mestre Felipão")