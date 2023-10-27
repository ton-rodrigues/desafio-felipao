const prompt = require('prompt-sync')();

//primeiros testes

let nome = "Tonzera"

console.log("SALVE MUNDÃO (save big world)")


// começando o desafio

let nomeJogo = "ᴛᴜʀᴍᴀ ᴅᴏs ʜᴇʀᴏ́ɪs"

let herois = [
    ["Mônica" , 5000],
    ["Cebolinha" , 3000],
    ["Cascão" , 4000],
    ["Magali" , 6000],
    ["Chico Bento" , 3000],
    ["Zé Esquecido" , 9999],
    ["Do Contra" , 7600],
    ["Franjinha" , 8000]
]

// saudação inicial

console.log(
    "\nOlá pessoa que gosta de aventura!\nSeja bem vinda ao jogo\n" +
    nomeJogo +"\n"

)

prompt ("Deseja continuar (S/n):")

console.log(
    "\***********=====***********=====***********\n" + 
    "             " + nomeJogo +
    "\n\n1 - Mônica\n2 - Cebolinha\n3 - Cascão\n4 - Magali\n5 - Chico Bento\n6 - Zé Esquecido\n7 - Do Contra\n8 - Franjinha" 
)




prompt ("\nEscolha o número do herói:")

console.log("\n\n\n\n𝙀𝙨𝙩𝙚 𝙟𝙤𝙜𝙤 𝙛𝙤𝙞 𝙙𝙚𝙨𝙚𝙣𝙫𝙤𝙡𝙫𝙞𝙙𝙤 𝙥𝙤𝙧 " + nome + " 𝙘𝙤𝙢 𝙖𝙥𝙤𝙞𝙤 𝙙𝙖 DIO 𝙚 𝙙𝙤 Mestre Felipão")