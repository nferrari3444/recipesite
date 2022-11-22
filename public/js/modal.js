

function modals() {
const openEls = document.querySelectorAll("[data-open]");

const close = document.getElementsByClassName('close-modal')[0]


const isVisible = "is-visible";


close.addEventListener('click', function(e) {
    console.log(e)
    const modalId = this.dataset.open
   // document.getElementById(modalId).classList.remove(isVisible);

})
for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open
        console.log(modalId)

        document.getElementById(modalId).classList.add(isVisible);

    })
}


const closeEls = document.querySelectorAll("[data-close]");
for (const el of closeEls) {
    el.addEventListener("click", function() {
      //  this.classList.remove(isVisible)
       this.parentElement.parentElement.parentElement.classList.remove(isVisible)
    })
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
})

document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

};

const isHidden = elem => {
    const styles = window.getComputedStyle(elem)
    return styles.display === 'none' || styles.visibility === 'hidden'
  }

async function showIngredients(meal, name) {
 
    let items = {ingredients: []  , measures: []}
await localforage.getItem('ingredients').then(function(value) {

        console.log(value)
       const data =  value.filter(item => item[meal])


       // el != '') || (el != null) || (el != undefined)
       const nonNullData = data.map(item => item[meal].filter(Boolean))
      // data[0][meal]
      console.log(nonNullData)
       items.ingredients.push(nonNullData[0])

       console.log(items.ingredients)

})
    

await localforage.getItem('measures').then(function(value) {

    console.log(value)
   const data =  value.filter(item => item[meal])
   const nonNullData = data.map(item => item[meal].filter(Boolean) )
//    console.log(data[0][meal])
    //(data[0][meal]
    console.log(nonNullData)
   items.measures.push(nonNullData[0])


    console.log(items.measures)
    //     .then(function(value) { console.log("Iteration has completed", value);})
    
    // .catch(function(err){ console.log(err);});
})


console.log(items)

var recipe_data = items.ingredients[0].map(function(e,i) {
    return [e, items.measures[0][i]];
});

console.log(recipe_data)

const datatable = createTable([recipe_data], meal);


    local_modal = document.getElementsByClassName('modal-table')[0]
    name = document.getElementById(meal).getElementsByClassName('modal-dish')[0].textContent
    console.log(name)
    // meal_one = document.getElementById(meal).children.children
    add_header = document.getElementsByClassName('show-title')[0]
    add_header.innerText = name
    // meal_two = document.getElementById(meal).childNodes
    // // console.log(meal_one)
    // console.log(meal_two)
    local_modal.setAttribute('id', meal)
    local_modal.appendChild(datatable)
    local_modal.classList.remove("hidden")
    //ingredients.style.display = 'block'

    console.log(local_modal)

    console.log(datatable)
  
    //local_modal = document.getElementsByClassName('modal-table')

  const closeModal = function (e) {
    //local_modal = document.getElementsByClassName('modal-table')[0]
    console.log(e.target)
    if (!isHidden(local_modal)) {
    local_modal.classList.add('hidden')

    const recipe = document.getElementById(meal)
    local_modal.removeChild(local_modal.lastChild)
    };
    
  }
  const closeModalBtn = document.getElementsByClassName('btn-close')[0];

  

 //closeModalBtn
 document.addEventListener("click", closeModal);



}

function createTable(tableData, meal) {

    var ingredients = document.getElementsByClassName('ingredients')
    var recipeArrayHeader = ["Ingredients", "Measures"];
    var table = document.createElement('table');
    // table.style.border = '1px solid black'
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      console.log(rowData)
      var thead = document.createElement('thead');
      table.appendChild(thead)

      for (var i=0; i<recipeArrayHeader.length; i++) {
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(recipeArrayHeader[i]))
      }
    
      
      rowData.forEach(function(cellData) {
        console.log(cellData)
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.style.width = '30'
        cell.appendChild(document.createTextNode(cellData[0]));
        var cell_2 = document.createElement('td');
        cell_2.style.width = '30'
        cell_2.appendChild(document.createTextNode(cellData[1]));
        row.appendChild(cell)
        row.appendChild(cell_2);
        tableBody.appendChild(row);
    });
  
     
    });
  
    table.appendChild(tableBody);
    //document.body.appendChild(table);
    // const modal = document.querySelector(".modal-table");
    // const overlay = document.querySelector(".overalay");
    
   return table
}