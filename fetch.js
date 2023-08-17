let mainSection = document.querySelector(".mainSection")

let random = ["https://picsum.photos/v2/list?page=", Math.floor(Math.random() * 10), "&limit=100"]



let pro = fetch(random.join(""), {
    method: "GET"
})

pro.then(elt=>{
    return elt.json()
}).then(elts=>{
    elts.forEach(function(curr){
        let mainDiv = document.createElement("div")
        mainDiv.setAttribute("class","bg-red-400 w-[30%] h-64")
        let img = document.createElement("img")
        img.src = curr.download_url
        img.setAttribute("class", "w-full h-[80%] object-cover")
        let p = document.createElement("p")
        p.setAttribute("class","font-semibold text-xl text-center")
        p.textContent = curr.author

        mainDiv.append(img)
        mainDiv.append(p)

        mainSection.append(mainDiv)
    })
}).catch((error)=> {
    alert("Failed to get Images")
})
