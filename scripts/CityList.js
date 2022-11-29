import { getCities, getWalkerCities } from "./database.js";

const cities = getCities();

export const CityList = () => {
  let citiesHTML = "<ul>";

  for (const city of cities) {
    citiesHTML += `<li>${city.name}</li>`;
  }

  citiesHTML += "</ul>";

  return citiesHTML;
};


const walkerCities = getWalkerCities();
