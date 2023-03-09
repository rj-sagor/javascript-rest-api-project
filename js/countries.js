const loadCountries= () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>displayAllCountry(data))
}  
const displayAllCountry=countries=>{
    // for(const country of countries){
    //     console.log(country)
    // }
    const AllDiv=document.getElementById('all-countries');
    countries.forEach(country => {
        const NewDiv=document.createElement('div');
        NewDiv.classList.add('country')
        NewDiv.innerHTML=`
        <h1>Name: ${country.name.common}</h1>
        <p>capital:${country.capital ? country.capital[0]: `not capital`} </p>
        <button onclick="LoadDetailsData('${country.cca2}')">Details</button>
        `;
        AllDiv.appendChild(NewDiv)
    });
}
const LoadDetailsData=code=>{
const url=`https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res => res.json())
.then(data=>displayDetailsData(data[0]))
}
 
const displayDetailsData= country =>{
const SingleCountrie=document.getElementById('singles-countries');
console.log(country)
SingleCountrie.innerHTML=`
<h2>Name: ${country.name.common}</h2>
<img src="${country.flags.png}">
`

}
loadCountries()