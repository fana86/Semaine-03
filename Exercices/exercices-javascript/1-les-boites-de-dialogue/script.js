alert('hello world');

//Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateuralert('salut');
let firstName = prompt("comment tu t'appelles?");
console.log(firstName);
// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()
let age = prompt('quel age as tu?');
while (age <= 18) {
  console.loge('false');
  if (age => 18) {
    console.log('true');
  }
}
alert('bienvenue');
if (window.confirm("une nouvelle fentre s'ouvre")) {
  window.open('aller vers page de contct');
}
