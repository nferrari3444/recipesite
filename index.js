
// let headers = new Headers()

// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');

// headers.append('Access-Control-Allow-Origin',  '*');

// headers.append('Access-Control-Allow-Credentials', 'true');
// headers.append('GET', 'POST', 'OPTIONS');


// $.get("recipes.json", function() {
//     console.log('success');
// })

// .done(function() {
//     console.log("second success");
// })
// .fail(function() {
//     console.log("error");
// })

// fetch('http://localhost/recipes.json', 

// {headers: headers}).then(response => {
//     return response.text();
// }).then(function(text) {
//     console.log(text)
//     return text ? JSON.parse(text) : {}
// }

// ).catch((err) => {
//     console.log(err)
// });

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// //usage:
// readTextFile("./recipes.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });

// fetch("./recipes.json", 

// // {headers: {
// //     'Content-Type': 'application/json',
// //     'Accept': 'application/json'
// // }},

// {mode: 'no-cors'}

// )
// .then(function(response) {
//     return response.json()
// })

// .then(function(data)  {
//     console.log(data)
//     })
    

// .catch(function(err) {
//     console.log(err)
// })

// async function loadData() {
// const response = await fetch("recipes.json", {mode: 'no-cors'})

// data = await response.json()

// console.log(data);}

// loadData()

const express = require('express');
const app = express();
const PORT = 3000;

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname,'/client/build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


// app.get('/', (req, res) => {

//     res.send('hola hola');
// });


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

