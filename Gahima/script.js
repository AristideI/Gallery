let title = document.querySelector(".title")
let author = document.querySelector(".author")
let boki = document.querySelector(".boki")
let desc = document.querySelector(".desc")
let button = document.querySelector("button")

const books = fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0451450523")

books.then((data)=>{
    return data.json()
}).then(data=>{
    button.addEventListener("click", function(){
        title.textContent = (data["items"][0]["volumeInfo"]["title"])
        author.textContent = (data["items"][0]["volumeInfo"]["authors"][0])
        desc.textContent = (data["items"][0]["volumeInfo"]["description"])
        boki.src = (data["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"])
        
    })
})