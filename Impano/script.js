const quoteText = document.querySelector('#quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateButton = document.getElementById('generate-button');

//generateButton.addEventListener('click', fetchQuote);


let impano = fetch('https://type.fit/api/quotes')


impano.then((data)=> data.json()).then(data => {
    setInterval(function(){
        let a = Math.floor(Math.random() * 16)
        quoteText.textContent = data[a].text
    },5000)
        
    });






