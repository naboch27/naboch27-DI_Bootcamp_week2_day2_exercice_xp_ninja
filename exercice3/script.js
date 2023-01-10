
// Exercice3
const motSaisie = prompt(" Entrer un mot")

const voyelleMot = motSaisie.replace(/[aeiou]/gi, '');

console.log("le mot sans les voyelles est " +voyelleMot);

//bonus
const a = 1

const e = 2

const i= 3

const o = 4

const u = 5

const  voyelleA = motSaisie.replace(/[a]/gi, a)

const  voyelleAE = voyelleA.replace(/[e]/gi, e)

const  voyelleAEI = voyelleAE.replace(/[i]/gi, i)

const  voyelleAEIO = voyelleAEI.replace(/[o]/gi, o)

const  voyelleAEIOU = voyelleAEIO.replace(/[u]/gi, u)

console.log("Le nouveau mot apres avoir remplacé les voyelles par des caracteres est " +voyelleAEIOU)
