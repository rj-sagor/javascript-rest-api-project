const loadData= () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayData(data))
}
const displayData=quote =>{
    const blockQuote=document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML=quote.quote;
}

loadData();