const getMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals))
}

const displayMeal = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
   const mealsArray = meals.forEach(meal => {
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
       <div  onclick="loadMeal(${meal.idMeal})"  class="card h-100">

       <img src="${meal.strMealThumb}" class="card-img-top w-100" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
       </div>
     </div>
       `
       mealsContainer.appendChild(div);
      // console.log(meal.idMeal);
       
   });
}

const searchFood = () => {
    const inputSearch = document.getElementById('input-meal')
   const inputValue = inputSearch.value;
   getMeal(inputValue);
    inputSearch.value = '';
}

const loadMeal = (mealId) => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.meals[0]))
  

};
const divModal = document.getElementById('modal')
const displayDetails = data => {
  
  
  divModal.innerHTML = `
  <div class="card h-100 ">

  <img src="${data.strMealThumb}" class="card-img-center w-100" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${data.strMeal}</h5>
    <p class="card-text">${data.strInstructions.slice(0, 200)}</p>
  </div>
</div>
    `
    
    
    // console.log(data);
}

getMeal('');