let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener("click", () =>{
    //permet d'effacer le chp qd on clique sur le bouton
    if(input.value ==""){
        alert("erreur");
        message.innerHTML = "Entrez du texte"

    }
    else{
            let value = input.value;
            var newLi = document.createElement("li");
            ul.appendChild(newLi);
            newLi.innerHTML = value;
            input.value = "";
        }
    });

