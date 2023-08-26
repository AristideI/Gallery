let display = document.querySelector("img")
let names = document.querySelector("p")


let lana = fetch("https://picsum.photos/v2/list?page=5&limit=100")

lana.then((data)=>{
    return data.json()
}).then((data)=>{
    setInterval(function(){
        let a = Math.floor(Math.random() * data.length - 1)
        display.src = data[a]["download_url"]
        names.textContent = data[a]["author"]
    },5000)
})