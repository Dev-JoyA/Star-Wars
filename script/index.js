let container = document.querySelector(".container")
const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
const backBtn = document.getElementById("backbtn");
const characters = document.getElementById("characters");
const body = document.body;
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
let isToggled = false; 


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


  luke.addEventListener("click", toggleDetails0);

  function toggleDetails0() {
    if (isToggled) {
      // If it's currently toggled on, hide the details
      luke.innerHTML = `
      <img class="img" src="./images/luke2.jpeg">
  `;
    } else {
      // If it's currently toggled off, fetch and display the details
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => {
          const results = data.results;
          luke.innerHTML = `
            <h3>Name: ${results[0].name}</h3>
            <h3>Gender: ${results[0].gender}</h3>
            <h3>Height: ${results[0].height}</h3>
          `;
        })
        .catch((error) => console.error("An error occurred:", error));
    }
  
    // Toggle the state for the next click
    isToggled = !isToggled;
  }

darin.addEventListener("click", toggleDetails9);

function toggleDetails9() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    darin.innerHTML = `
    <img class="img" src="./images/darin.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        darin.innerHTML = `
          <h3>Name: ${results[3].name}</h3>
          <h3>Gender: ${results[3].gender}</h3>
          <h3>Height: ${results[3].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}

c3.addEventListener("click", toggleDetails8);

function toggleDetails8() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    c3.innerHTML = `
    <img class="img" src="./images/c3a.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        c3.innerHTML = `
          <h3>Name: ${results[1].name}</h3>
          <h3>Gender: ${results[1].gender}</h3>
          <h3>Height: ${results[1].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}

r1.addEventListener("click", toggleDetails7);

function toggleDetails7() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    r1.innerHTML = `
    <img class="img" src="./images/biggs.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        r1.innerHTML = `
          <h3>Name: ${results[2].name}</h3>
          <h3>Gender: ${results[2].gender}</h3>
          <h3>Height: ${results[2].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}

leia.addEventListener("click", toggleDetails6);

function toggleDetails6() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    leia.innerHTML = `
    <img class="img" src="./images/leia.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        leia.innerHTML = `
          <h3>Name: ${results[4].name}</h3>
          <h3>Gender: ${results[4].gender}</h3>
          <h3>Height: ${results[4].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}


owen.addEventListener("click", toggleDetails5);

function toggleDetails5() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    owen.innerHTML = `
    <img class="img" src="./images/owen.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        owen.innerHTML = `
          <h3>Name: ${results[5].name}</h3>
          <h3>Gender: ${results[5].gender}</h3>
          <h3>Height: ${results[5].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}


beru.addEventListener("click", toggleDetails4);

function toggleDetails4() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    beru.innerHTML = `
    <img class="img" src="./images/beru2.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        beru.innerHTML = `
          <h3>Name: ${results[6].name}</h3>
          <h3>Gender: ${results[6].gender}</h3>
          <h3>Height: ${results[6].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}


r5.addEventListener("click", toggleDetails3);

function toggleDetails3() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    r5.innerHTML = `
    <img class="img" src="./images/r5.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        r5.innerHTML = `
          <h3>Name: ${results[7].name}</h3>
          <h3>Gender: ${results[7].gender}</h3>
          <h3>Height: ${results[7].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}

// toggle

// Initialize a variable to track the toggle state

biggs.addEventListener("click", toggleDetails1);

function toggleDetails1() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    biggs.innerHTML = `
    <img class="img" src="./images/biggs.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        biggs.innerHTML = `
          <h3>Name: ${results[8].name}</h3>
          <h3>Gender: ${results[8].gender}</h3>
          <h3>Height: ${results[8].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}

obi.addEventListener("click", toggleDetails2);

function toggleDetails2() {
  if (isToggled) {
    // If it's currently toggled on, hide the details
    obi.innerHTML = `
    <img class="img" src="./images/obi2.jpeg">
`;
  } else {
    // If it's currently toggled off, fetch and display the details
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        obi.innerHTML = `
          <h3>Name: ${results[9].name}</h3>
          <h3>Gender: ${results[9].gender}</h3>
          <h3>Height: ${results[9].height}</h3>
        `;
      })
      .catch((error) => console.error("An error occurred:", error));
  }

  // Toggle the state for the next click
  isToggled = !isToggled;
}




main()

module.exports = { main }
