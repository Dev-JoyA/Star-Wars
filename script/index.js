let container = document.querySelector(".container")
const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
const backBtn = document.getElementById("backbtn");

const characters = document.getElementById("characters");
const body = document.body;

// const characterElements = [
//   document.getElementById("luke"),
//   document.getElementById("darin"),
//   document.getElementById("c3"),
//   document.getElementById("r1"),
//   document.getElementById("leia"),
//   document.getElementById("owen"),
//   document.getElementById("beru"),
//   document.getElementById("r5"),
//   document.getElementById("biggs"),
//   document.getElementById("obi"),
// ];

// // button event and style display

btn.addEventListener("click", () => {
  body.classList.add("replaceBackground");
  btn.classList.remove("btn1");
  btn.classList.add("btn2");
  characters.style.display = 'flex';
  backBtn.style.display = 'inline';
  heading.classList.add("change");
});

backBtn.addEventListener('click', () => {
  window.location.reload();
});

// // // character object

// const characterData = [
//   { name: "", gender: "", height: "" }, // luke
//   { name: "", gender: "", height: "" }, // darin
//   { name: "", gender: "", height: "" }, // c3
//   { name: "", gender: "", height: "" }, // r1
//   { name: "", gender: "", height: "" }, // leia
//   { name: "", gender: "", height: "" }, // owen
//   { name: "", gender: "", height: "" }, // beru
//   { name: "", gender: "", height: "" }, // r5
//   { name: "", gender: "", height: "" }, // biggs
//   { name: "", gender: "", height: "" }, // obi
// ];



// characterElements.forEach((element, index) => {
//   element.addEventListener("click",() => {
    
//     fetch(`https://swapi.dev/api/people/${index + 1}`)
//     // fetch(`https://swapi.dev/api/people/`)
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data)
//         characterData[index] = {
//           name: data.name,
//           gender: data.gender,
//           height: data.height,
//         };
//         updateCharacterDetails(index);
//       })
//       .catch((error) => console.error("An error occurred:", error));

//   });


 
// }); 
// characterElements.forEach((element, index) => {
//   element.addEventListener("click",() => {
    
//     fetch(`https://swapi.dev/api/people/${index + 1}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const results = data.results;
//         console.log(results);
//         characterData[index] = {
//           name: results.name,
//           gender: results.gender,
//           height: results.height,
//         };
//         updateCharacterDetails(index);
//       })
//       .catch((error) => console.error("An error occurred:", error));
//   });


 
// }); 



// function updateCharacterDetails(index) {
//   const characterElement = characterElements[index];
//   const character = characterData[index];

//   characterElement.innerHTML = `
//     <h3>Name: ${character.name}</h3>
//     <h3>Gender: ${character.gender}</h3>
//     <h3>Height: ${character.height}</h3>
//   `;
// }





// const btn = document.getElementById("btn");
// const heading = document.getElementById("heading");
// const backBtn  = document.getElementById("backbtn");
// const characters = document.getElementById("characters");
// const body = document.body;
const luke = document.getElementById("luke");
const darin = document.getElementById("darin");
const c3 = document.getElementById("c3");
const leia = document.getElementById("leia");
const owen = document.getElementById("owen");
const beru = document.getElementById("beru");
const r1 = document.getElementById("r1");
const r5 = document.getElementById("r5");
const biggs = document.getElementById("biggs");
const obi = document.getElementById("obi");


btn.addEventListener("click", display);

function display (){
    body.classList.add("replaceBackground");
    btn.classList.remove("btn1");
    btn.classList.add("btn2");
    characters.style.display = 'flex';
    backBtn.style.display = 'inline';
    heading.classList.add("change")
}

backBtn.addEventListener('click', function() {
    window.location.reload(); 
  });


luke.addEventListener("click", details);

function details(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        luke.innerHTML = `
        <h3>Name :${results[0].name}</h3>
        <h3>Gender: ${results[0].gender}</h3>
        <h3>Height: ${results[0].height}</h3>
         `
        console.log(results[0].name);
    })
    .catch((error) => console.error("An error occurred:", error));
  
}

darin.addEventListener("click", details1);

function details1(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        darin.innerHTML = `
        <h3>Name :${results[3].name}</h3>
        <h3>Gender: ${results[3].gender}</h3>
        <h3>Height: ${results[3].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}

c3.addEventListener("click", details2);

function details2(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        c3.innerHTML = `
        <h3>Name :${results[1].name}</h3>
        <h3>Gender: ${results[1].gender}</h3>
        <h3>Height: ${results[1].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}

r1.addEventListener("click", details3);

function details3(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        r1.innerHTML = `
        <h3>Name :${results[2].name}</h3>
        <h3>Gender: ${results[2].gender}</h3>
        <h3>Height: ${results[2].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}

leia.addEventListener("click", details4);

function details4(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        leia.innerHTML = `
        <h3>Name :${results[4].name}</h3>
        <h3>Gender: ${results[4].gender}</h3>
        <h3>Height: ${results[4].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}


owen.addEventListener("click", details5);

function details5(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        owen.innerHTML = `
        <h3>Name :${results[5].name}</h3>
        <h3>Gender: ${results[5].gender}</h3>
        <h3>Height: ${results[5].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}


beru.addEventListener("click", details6);

function details6(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        beru.innerHTML = `
        <h3>Name :${results[6].name}</h3>
        <h3>Gender: ${results[6].gender}</h3>
        <h3>Height: ${results[6].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}


r5.addEventListener("click", details7);

function details7(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        r5.innerHTML = `
        <h3>Name :${results[7].name}</h3>
        <h3>Gender: ${results[7].gender}</h3>
        <h3>Height: ${results[7].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}

// toggle

biggs.addEventListener("click", details8);

function details8(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        biggs.innerHTML = `
        <h3>Name :${results[8].name}</h3>
        <h3>Gender: ${results[8].gender}</h3>
        <h3>Height: ${results[8].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}


obi.addEventListener("click", details9);

function details9(){
    fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
        const results = data.results;
        obi.innerHTML = `
        <h3>Name :${results[9].name}</h3>
        <h3>Gender: ${results[9].gender}</h3>
        <h3>Height: ${results[9].height}</h3>
         `
    })
    .catch((error) => console.error("An error occurred:", error));
  
}



// function main() {
//   const arrOfImg = [
//     "luke.jpeg",
//     "beru2.jpeg",
//     "biggs.jpeg",
//     "c3a.jpeg",
//     "darin2.jpeg",
//     "leia.jpeg"
//   ]


//   fetch("https://swapi.dev/api/people")
//     .then((res) => res.json())
//     .then((data) => {
//         const results = data.results;
       
//       let list = ''
//         results.forEach((element, index )=> {
//           list += `
//           <div class="r5" class="bg-style">
//             <img class="img" src="./images/${arrOfImg[index]}">
//             <p >${element.name}</p>
//             <p>${element.height}</p>
//             <p>${element.gender}</p>
//           </div>
//           `  
         
//         });
//         characters.insertAdjacentHTML("afterbegin", list)

      
    
//     })
//     .catch((error) => console.error("An error occurred:", error));
  

// }
main()

module.exports = { main }
