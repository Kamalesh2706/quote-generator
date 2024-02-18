const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading(){
    loader.hidden=false
    quoteContainer.hidden=true
}
function complete(){
    loader.hidden=true
    quoteContainer.hidden=false
}


let apiQuote = [];
function newQuote()
{
    loading()
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];

    if(quote.text.length >120){
        quoteText.classList.add("long-quote")
    }
    else{
        quoteText.classList.remove("long-quote")
    }

    quoteText.textContent = quote.text
    authorText.textContent = quote.author
    complete()
}


// get api 

async function getQuotes(){
    loading()
    const apiUrl = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(apiUrl);
        apiQuote = await response.json()
        newQuote()
    }
    catch(error)
    {

    }
}




// event listeners

newQuoteBtn.addEventListener("click",newQuote);



// onload

getQuotes()