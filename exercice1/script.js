// Exercice1
let date_1 = new Date().getFullYear();

let datePers1 = prompt("Saisir la date de naissance de la  personne 1")

let datePers2 = prompt("Saisir la date de naissance de la  personne 2")

// verification des  valeurs entrées ,si se sont  des nombres
if(!Number(datePers1) || !Number(datePers2)) {

    console.log('La date de naissance saisie, doit respecter le format YYYY')

}else{

    let agePers1 = date_1 - datePers1
    
    let agePers2 = date_1 - datePers2

 //le Nombre d'année ajouté sur l'année actuelle pour que la pers 2 est la moitié de l'age du pers 1 
    
 let dateNormal;

    if (agePers1 > agePers2) {

        dateNormal = agePers1 - 2*agePers2;

    }
    else {

        dateNormal = agePers2 - 2*agePers1;

    }
    console.log(dateNormal)

    console.log(date_1)

    let moitierDatePers = date_1 + dateNormal

    let message = "L'année à laquelle l'age de la pers 2 est la moitié de l'age de la pers 1 est " + String(moitierDatePers)
    
    console.log(moitierDatePers)
   
    alert(message);
}  

