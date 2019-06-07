// <!-- <tr>
// <td>Example Name</td>
// <td>Carnivore</td>
// <td>1</td>
// </tr> -->

const ANIMAL_URL = "http://localhost:3000/animals";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("table tbody");
  const form = document.querySelector("form");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.querySelector("#animal-name").value;
    const speciesName = e.target.querySelector("#animal-species").value;
    const diet = e.target.querySelector("#diet-input").value;

    // const name = e.target.elements.name.value
    // const species = e.target.elements.species.value
    // const diet = e.target.elements.diet.value

    const animalData = {
      name: name,
      speciesName: speciesName,
      diet: diet
    };

    fetch(ANIMAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalData)
    })
      .then(r => r.json())
      .then(animal => {
        const tr = createAnimalRow(animal);
        tableBody.appendChild(tr);
      });
  });

  // initial fetch 2 render the animals
  fetch(ANIMAL_URL)
    .then(r => r.json())
    .then(animals => {
      console.log("initial fetch", animals);
      renderAnimals(animals);
    });

  // render helpers
  const renderAnimals = animals => {
    const trs = animals.map(createAnimalRow);
    trs.forEach(tr => tableBody.appendChild(tr));
  };

  const createAnimalRow = animal => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${animal.name}</td>
        <td>${animal.diet}</td>
        <td>${animal.species_name}</td>
      `;
    return tr;
  };
});
