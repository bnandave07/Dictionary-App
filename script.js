const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


const result = document.querySelector('.result')
const sound = document.querySelector('#sound')
const button  = document.querySelector('#search-btn')


button.addEventListener('click',function(){
    console.log("Hello")
    let inputWord = document.querySelector('#inp-word').value;
    console.log(inputWord)

    fetch(`${url}${inputWord}`)
    .then(function(response){
        response.json().then(function(data){
            console.log(data)
            result.innerHTML = `<div class="word">
            <h3>${inputWord}</h3>
            <button onclick = "playSound()">
            <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>`
        sound.setAttribute("src",`${data[0].phonetics[0].audio}`)
        console.log(sound)
        })
        
    })
})


function playSound(){
    sound.play()
}