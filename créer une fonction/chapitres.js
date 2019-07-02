var bodyElt = document.getElementById("body")

let myData = [
    {
        monTitre : "Bienvenue !",
        monParagraphe : "Bienvenue sur mon site ! Plein de lorem ipsum..."
    },
    {
        monTitre : "un chapitre pour débuter",
        monParagraphe :"Paragraphe chapitre 1"
    },
    {
        monTitre : "un chapitre ",
        monParagraphe :"Paragraphe chapitre 2"
    },
    {
        monTitre : "un chapitre ",
        monParagraphe :"Paragraphe chapitre 2"
    }

]
console.log(myData[0].monTitre);
console.log(newDiv);



for(var i= 0; i < myData.length; i++)//je parcours mon tableau
{
    var newDiv = document.createElement("div");//je crée mon élt div ds le tableau
    var newTitle = document.createElement("h1");//je crée mon élt h1 ds le tableau
    var newPara = document.createElement("p");//je crée mon élt p ds le tableau

    bodyElt.appendChild(newDiv); //j'insère 1 div dans mon body
    newDiv.appendChild(newTitle);//j'insère  1 titre dans ma div
    newDiv.appendChild(newPara);// j'insère  1 paragraphe ds ma div

    newTitle.innerHTML = `Chapitre ${i+1} : ${myData[i].monTitre}`;//j'écris le contenu ds mon HTML
    newPara.innerHTML = myData[i].monParagraphe;
}
