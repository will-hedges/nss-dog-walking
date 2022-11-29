import { getPets, getWalkers } from "./database.js";

const pets = getPets();
const walkers = getWalkers();

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};

// code for clicking the pets
document.addEventListener("click", (clickEvent) => {
  // get the specific item clicked
  const itemClicked = clickEvent.target;

  // check if the item clicked was a pet list item
  if (itemClicked.id.startsWith("pet")) {
    const [, petId] = itemClicked.id.split("--");

    // compare the primary key of each pet to the one you have
    for (const pet of pets) {
      // don't have to have parseInt() if you use '==' here
      if (pet.id == petId) {
        // when you find the match, match up the pets walkerId and the walker's id
        for (const walker of walkers) {
          if (pet.walkerId === walker.id) {
            window.alert(`${pet.name} is being walked by ${walker.name}`);
          }
        }
      }
    }
  }
});
