importScripts('js/localforage.min.js')

const dbName = 'store'
const ingredientsStore = localforage.createInstance({
    name: dbName,
    storeName: 'ingredients'
})

const measuresStore = localforage.createInstance({
    name: dbName,
    storeName: 'measures'
})




// function cacheAssets(assets) {

//     return new Promise(function (resolve, reject) {
//         // open cache
//         caches.open('assets')
//         .then(cache => {

//             // the API does all the magic for us
//             cache.addAll(assets)
//             .then(() => {
//                 console.log('all assets added to cache')
//                 resolve()
//             })
//             .catch(err => {
//                 console.log('error when syncing assets', err)
//                 reject()
//             })
//         }).catch(err => {
//             console.log('error when opening cache', err)
//             reject()
//         })
//     });
// }

// var assets = 'data/recipes.json'

// // cache responses of provided urls
// cacheAssets(assets)
// .then( data => {


//     // const values = Object.values(data)
//     //  ingredientsStore.setItem(3, data)
//     //  measuresStore.setItem(4, data)

//     //  ingredientsStore.setItem('ingredients', data)
//     //  measuresStore.setItem('measures', data)
//     // console.log(Object.values(data))
// })


self.addEventListener("fetch", function(event)  {

     var request = event.request
     if (request.url.indexOf('data/recipes.json') > -1) {
     
        // caches.open('assets').then(cache => {
        //         cache.match('data/recipes.json').then(settings => {
        //             console.log(settings.json())
        //         })
        // })
        // console.log(caches.getCachedData())
         event.respondWith (

            async function() {
                const response = await fetch(event.request)

                data = await response.clone().json()
                // console.log(data)
        //      caches.match(event.request).then(function(response) {
                let ing = []
                let meas = []
                for (item in data) {
                    // console.log(item)
                 data[item].forEach((dish,key) => {
                    const mealId = dish[0].idMeal
                    const ingredients = Object.entries(dish[0]).slice(9,29).map(entry => entry[1])//.filter(Boolean)
                    const measures = Object.entries(dish[0]).slice(29,49).map(entry => entry[1])//.filter(Boolean)

                    // ingredientsStore.setItem(String(mealId), ingredients)
                    // measuresStore.setItem(String(mealId), measures)
                    
                    ing.push({[dish[0].idMeal]: ingredients})
                    meas.push({[dish[0].idMeal]: measures})    
                    // localforage.setItem('ingredients', ingredients)

                    if (typeof window !== 'undefined') {
                    localStorage.setItem('ingredients', JSON.stringify(ingredients))
                    localStorage.setItem('measures', JSON.stringify(measures))
                    }

                    // console.log(ingredients)
                    // console.log(measures)
                    // console.log(mealId)
                })
            }

                localforage.setItem('ingredients',ing)
                localforage.setItem('measures',meas)

        //          return response || fetch(request);
             return response }())
         
     }
    });
//     // console.log(event.request.url)
    // console.log('service workder fetch')
    // fetch(event.request)

    //  if (event.request.url.includes('data/recipes.json')) {
    
    //     event.respondWith(async function() {

    //     const response = await fetch(event.request) 

        // data = await response.clone().json()

        // ingredientsStore.setItem('ingredients', data)
        // measuresStore.setItem('measures', data)


    
    
        //     console.log(event.request.url)
    //     console.log(event)
    //      event.respondWith(caches.match(event.request)
    //      .then ( function (response) {
    //         if (response) {
    //             console.log('returning file from cache')
    //             return response
    //         }
    //         else {
    //             return fetch(event.request)
    //         }
    //      })
    //     )
    // }

// if (event.request.url.includes('data/recipes.json')) {
//     console.log(event.request.url)

//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//                 console.log(response.clone().json())
//                 data =  response.clone().json()

//                 .then(data => console.lo)
        
        
// )}
    
    //      fetch(event.request)
    //      .then(response => response.clone().json())
    //      .then(data => console.log(data))

        



async function getCachedData(url) {
    //const cacheStorage = await caches.open(cacheName);
    //const cachedResponse = await cacheStorage.match(url);

    const cachedResponse = await caches.match('data/recipes.json');
    const data = await cachedResponse.json(); 
    // console.log(data)

    for (item in data){

        data[item].forEach((dish, key) => {
           
           const value = Object.entries(dish[0]).slice(1,10).map(entry => entry[1])
          
            ingredientsStore.setItem('ingredients',value)
             measuresStore.setItem('measures',value)
            })
        
    }


   
    // if (!cachedResponse || !cachedResponse.ok) {
    //     return false
    // }

    // const data = await cachedResponse.json(); 
    // console.log(data)
    return data
}

getCachedData('data/recipes.json');
