const loadMelas= (TextSearch) =>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${TextSearch}`
    fetch(url)
   .then(res=>res.json())
  .then(data=>displayMeals(data.meals))
}
const displayMeals=meals=>{
    // step-1: get container div
    const MainDiv=document.getElementById('melas-header');
    MainDiv.innerText="";
    meals.forEach(meal => {
        //step-2 create a div under main div
        const sinDiv=document.createElement('div');
        console.log(meal)
        sinDiv.classList.add('col')
        sinDiv.innerHTML=`
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <button onclick="modalButton2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#details-id">
               Details
         </button>
      </div>
        `;
        MainDiv.appendChild(sinDiv)
    });
}
function loadButton(){
    const TextSearch=document.getElementById('search-field').value; 
    loadMelas(TextSearch)
}

const modalButton=idMeal=>{
 const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=>res.json())
.then(data=>DisplayModal(data.meals[0]))
.catch((error) => {
    console.error("Error:", error);
  });
}

const modalButton2=async(idMeal)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try {
     const res=await fetch(url);
    const data=await res.json()
    DisplayModal(data.meals[0])      
    } 
    catch (error) {
        console.log(error)
    }
}

const DisplayModal=meal=>{
    document.getElementById('details-idLabel').innerText=meal.strMeal
    const modalDetails=document.getElementById('image-id');
    modalDetails.innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb}">
    <p>${meal.strInstructions}</p>
    `;
}
loadMelas('rice')