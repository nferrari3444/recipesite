
// $(function() {
//     $.ajax({

//         url: "recipes.json",
//         success: function(result) {

//             $.each(result, function (index, item) {
//                // console.log(Object.keys(item))
//                 console.log(item.)
//             })
//         }
//     })
// })



const container = document.getElementById('display-cards');
const rows = document.querySelector('rows');
const sections = document.querySelector('section');
const header = document.querySelector('header');
console.log(sections)

// async function fetchData(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }

fetch("data/recipes.json")
.then(function(response) {
     return response.json()
 })

.then(function(data)  {
   
    var keys = Object.keys(data)
    var datalength = Object.values(data).length
    var areas = [] 
    var i = 0
    keys.map(key => data[key].map((item) => areas.push(item["0"].strArea)))
    let uniqueAreas = [...new Set(areas)]
   

    uniqueAreas.map(area => {
        sections.innerHTML += `<button class = "btn-group" type = "button" data-area=${area}>${area}</button>`    
    })
    
    header.innerHTML = `<button
       
       type = "button" class='styled-buttons' onclick ='getAllData()' data-meal=ALL>ALL DISHES</button>`
    for (var item in data) {
        
      
       //console.log(item)
      // console.log(sections)
    
       header.innerHTML +=  `<button
       
       type = "button" class='styled-buttons' data-meal=${item}>${item}</button>`

        
      
        for (var i = 0; i < datalength; i++){
        
         var dishesLength = data[item].length
         var dish = dishesLength - dishesLength + 1
       
            if (data[item][i] === undefined) {continue;}
            
                var recipe_object = data[item][i][0]
                var keys = Object.keys(recipe_object)
              
                const text = 'Ingredient'
                
                var ingredients = []
                var areas = []
                var values = data[item][i][0]
                var meal = values.strMeal
                var area = values.strArea
                var idMeal = values.idMeal
                var source = values.strSource
        
                var instructions = values.strInstructions
                var image = values.strMealThumb
             
                const content = `
                <div class="card-container" data-meal="${item}" data-area="${area}"> 
                <div class=recipe-card>
                <figure> <img src=${image} + alt=${meal}></figure>
                
                <div class="card-meta">
                <p class="dish-type">${item}</p>
                <ul class="dish-stats">
                <li class = "ingredients" onclick="showIngredients(${idMeal})"><i class="fa fa-info-circle fa-2x info-icon"></i>Ingredients</li>
               
                </ul>
                </div>
                <h5>${meal}</h5>
             


                <button type="button"  class="open-modal" data-open="${idMeal}">Instructions</button>

                
                <div class="modal" id="${idMeal}">
                <div class="modal-dialog">
                    <div class="modal-header">
                    Recipe Instructions for:  <span class="modal-dish">${meal}</span>
                    <button class="close-modal" aria-label="close modal" data-close></button>
                    </div>
                <div class="modal-content">${instructions}</div>
                <footer class="modal-footer">
              <button type="button" class="close-modal button-size" aria-label="close-modal" data-close>Close</button>
                   <div class="source-data"> <a href = ${source} target="_blank"</a> ${source}</div>
                </div>
                </footer>
                `;

                container.innerHTML += content;

            
                
        
        }
      
        applyFilters()
        modals()
    }
})
   
    

.catch(function(err) {
     console.log(err)
 })
// };


// getData();
