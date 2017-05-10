console.log("famous people", famousPeople);
//ARRAY OF FAMOUS PEOPLE//

var famousPeople = [

    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    }, {
        title: "Baseball Player",
        name: "Ted Williams",
        bio: "Teddy Ballgame. Greatest hitter of all time.",
        image: "img/teddyballgame.jpg",
        lifespan: {
            birth: 1918,
            death: 2002
        }
    }, {
        title: "Frontman",
        name: "Henry Rollins",
        bio: "Lead singer of Black Flag.",
        image: "img/rollins.jpg",
        lifespan: {
            birth: 1961,
            death: "Present"

        }
    },

    {
        title: "Singer",
        name: "Tom Waits",
        bio: "Singer. Songwriter. Poet. Archetype of cool.",
        image: "img/waits.jpg",
        lifespan: {
            birth: 1949,
            death: "Present"
        }
    },

    {
        title: "Writer",
        name: "Jack Kerouac",
        bio: "Author of On the Road. Member of the Beat Generation",
        image: "img/kerouac.png",
        lifespan: {
            birth: 1922,
            death: 1969
        }
    }
];

console.log("famousPeople", famousPeople);


var person = " ";
var people = document.getElementById("people");
for (x in famousPeople) {
    var person = `<article class="people">
                    <h1 class="title">${famousPeople[x].title}</h1>
                    <h3 class="name">${famousPeople[x].name}<h3>
                    <img class="image" src="${famousPeople[x].image}" height="125" width="125">
                    <section class="bio">${famousPeople[x].bio}</section>
                    <footer class="footer">${famousPeople[x].lifespan.birth} to ${famousPeople[x].lifespan.death}</footer>
                </article>`

    people.innerHTML += person;


};


// var input = document.getElementById("text-area");
// var thisPerson = " ";

// function focusText(){
//     input.focus();
// }

// function clearInput(){
//     input.value =" ";
// }

// input.addEventListener("keyup", function(event) {
//     //key event
//     thisPerson.innerHTML = event.target.value;
//     if(key === 13){
//         clearInput();
//     }
// });





