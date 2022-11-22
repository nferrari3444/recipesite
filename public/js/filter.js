function seeRecipe() {
    document.querySelectorAll("display-cards button").forEach(button => {
        button.addEventListener('click', function(e) {
          
        })
    })
}

function getAllData() {

    
        document.addEventListener('click', function(e) {

            let meal = e.target.dataset.meal;
              console.log(meal)
          if (meal == 'ALL')
            {
            
              document.querySelectorAll(`#display-cards .card-container`).forEach(recipe => {
                        
                 recipe.style.display = 'block'
                //recipe.classList.add('visible')
                  })    // console.log(recipe)
               }

        }
        )
}

function applyFilters() {

    const displays = {
        false: 'none',
        true: 'block'
    };


    


    document.querySelectorAll('header button').forEach(button => {
        button.addEventListener('click', function(e) {
            
            let meal = e.target.dataset.meal;
            
            document.querySelectorAll(`#display-cards .card-container`).forEach(recipe => {
                
                
                
                // console.log(recipe.getAttribute('data-meal'))
                if (recipe.getAttribute('data-meal') === meal) {
                    console.log(recipe)
                recipe.style.display = 'block'
                }
    
                else {
                    recipe.style.display = 'none'
                }
                // if (recipe === undefined) {break;}
            })
        })
    })  

document.querySelectorAll('section button').forEach(button => {
    button.addEventListener('click', function(e) {
        
        let area = e.target.dataset.area;
        
        document.querySelectorAll(`#display-cards .card-container`).forEach(recipe => {
            
            
             
            // console.log(recipe.getAttribute('data-area'))
            if (recipe.getAttribute('data-area') === area) {
    
            recipe.style.display = 'block'
            }

            else {
                recipe.style.display = 'none'
            }
            // if (recipe === undefined) {break;}
        })
    })
})    
}

function liveSearch() {

    // console.log('aca')
    // console.log(e)
    var cards = document.getElementsByClassName('card-container')
    var array = Array.prototype.slice.call(cards,0);

    var elements = array.filter(function(element) { return window.getComputedStyle(element).display === "block";})
   // var elements = document.getElementById('#display-cards .card-container').getComputedStyle
    // console.log('filtered elements')
    // console.log(elements)
    let recipes = document.getElementsByClassName('recipe-card')

    let search_query = document.getElementById("searchbox").value;
// console.log(search_query)
// console.log(cards.length)
    for (var i=0; i < elements.length; i++) {

        let dish = elements[i].children[0].getElementsByTagName('h5')[0]
        //let dish = cards[i].getElementsByTagName("h5")[0]
        // console.log(dish)


        
        if (dish.textContent.toLowerCase()
        .includes(search_query.toLowerCase())) {

            elements[i].style.display = 'block'
            // cards[i].classList.remove("is-hidden");
        }

        
            
        // if (search_query.toLowerCase() === '') {
        //     elements[i].style.display = 'block'
        // }

        else {
            elements[i].style.display = 'none'
            // cards[i].classList.add("is-hidden")
        }
    }


    if (search_query === '') {
    document.querySelectorAll(`#display-cards .card-container`).forEach(recipe => {
            
            
             
        // console.log(recipe.getAttribute('data-area'))
         

        recipe.style.display = 'block'
        
})}

}