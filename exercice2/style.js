
// Exercice2
//Code postal normal

const codePostalNormal = prompt(" Entrer votre code postal")

if (String(codePostalNormal).length != 5 || !Number(codePostalNormal)) {

    console.log("error")

} else {

    console.log("succès")

}

//Code postal  avec regex
const codePostalCheck = prompt(" Entrer votre code postal")

//peut contenir que des chiffres et le nombre de caractere precis

const numberRegex = /^[\d+]{5}$/;

if (numberRegex.test(codePostalCheck)) {

    console.log("succès")

} else {

    console.log("error")

}