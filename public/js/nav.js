let navdata = document.getElementsByClassName('nav-data')[0];
 let navLinks = document.querySelectorAll('.navigation nav a');
//let navLinks = document.getElementsByTagName('a')


let mision = document.getElementById('mision')
let vision = document.getElementById('vision')
let introduction = document.getElementById('introduction')




window.addEventListener('load', () => {


content = `Within this website you can choose a variety of healthy recipes to cook by ourself or family and friends.
You would the possibility to choose recipes based on food categories or based on zones.
Hope that you find a suitable recipe!!`

introduction.innerHTML = content
})

       

navLinks.forEach(navItem => {
    navItem.addEventListener('click', function() {
        console.log(navItem.text)

        if (navItem.text == 'Vision') {
            var x = document.getElementById("vision")
            var y = document.getElementById("mision")
            var z = document.getElementById("introduction")
            
            // var defaultNav = document.getElementsByClassName('active')[0]
            x.style.display = "block"          

            y.style.display = "none"
            // defaultNav.classList.remove('active')
            z.style.display = "none"

            content = `We think that cooking is a great skill for everyone. Our objective 
            is that an increase number of people can join us an learn typical dishes
            from their country or from foreign countries.`

            vision.innerHTML = content


        }

        if (navItem.text == 'Mision') {
            var x = document.getElementById("mision")
            x.style.display = "block"

            var y = document.getElementById("vision")
            var z = document.getElementById("introduction")
            
            // var defaultNav = document.getElementsByClassName('active')[0]
            y.style.display = "none"
            // defaultNav.classList.remove('active')
            z.style.display = "none"

            
           var content =  `Our mission is to provide elements and information of the main dishes in each zones
           as well as different kind of dishes. We want that people become informed about
           different kind of dishes that they might cook.`

           mision.innerHTML = content

        }

        if (navItem.text == 'Introduction') {
            var x = document.getElementById("introduction")
            x.style.display = "block"

            var y = document.getElementById("mision")
            var z = document.getElementById("vision")

            y.style.display = "none"
            z.style.display = "none"

            content = `Within this website you can choose a variety of healthy recipes to cook by ourself or family and friends.
            You would the possibility to choose recipes based on food categories or based on zones.
            Hope that you find a suitable recipe!!`

            introduction.innerHTML = content

    }
}

)
});


function displayNavText(link) {

    console.log(link)

}


function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === "navigation") {
        x.className += " responsive";
    }
    else {
        x.className = "navigation";
    }
}
