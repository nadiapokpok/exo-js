//YjcLyb41PxOG15brFKkUoA4O1VaEtTxQ
const input = document.getElementById("input");
const key = "YjcLyb41PxOG15brFKkUoA4O1VaEtTxQ";
const req = new XMLHttpRequest();
const img = document.getElementById("gif");

function getGif() {
    req.open('GET', `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input.value}&limit=1`, false); 
    req.send(null);
    if (req.status === 200) {
        var data = JSON.parse(req.responseText);
        img.setAttribute("src", data.data[0].images.original.url);
    } else {
        console.log(req.status, req.statusText);
    }
}

window.addEventListener("keypress", (e)=>{
    if(e.keyCode == 13){
        getGif();
    }
})