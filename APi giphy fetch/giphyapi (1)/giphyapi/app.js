var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var reponse = document.querySelector("#reponse");

var api = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=mCgh96odtFB5gU8Y9jMStw79SbR6WqF7"

function callApi() {
    fetch(api, { method: "get"})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < 25; i++){
            var image = document.createElement("iframe");
            reponse.appendChild(image);
            image.src = data.data[i].embed_url;
            console.log(image.src)
        }
        
    })

}

callApi()

btn.addEventListener("click", () => {
    api = `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=mCgh96odtFB5gU8Y9jMStw79SbR6WqF7`;
    reponse.innerHTML = "";
    callApi();
})