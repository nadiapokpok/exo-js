var titleAnimal = "";
var textAnimal = "";
var animalVar = "";
var song = new Audio();

var modal = document.getElementsByClassName("container-modal")[0]

function openModal(animal) {
    animalVar = animal;
    titleAnimal = document.getElementById("title-"+animal).innerHTML;
    textAnimal = document.getElementById("text-"+animal).innerHTML;
    document.getElementById("title-modal").innerHTML = titleAnimal;
    document.getElementById("text-modal").innerHTML = textAnimal;
    modal.style.display = "block";
    console.log(textAnimal)
}

function closeModal() {
    modal.style.display = "none";
    song.pause();
}

function clickSong() {
    song = new Audio("./media/song/"+animalVar+".mp3");
    song.play();
}


window.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal();
    song.pause();

    }
    console.log(e.target)
})
