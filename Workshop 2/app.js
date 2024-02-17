console.log("Working");

const countryContainerEl = document.querySelector(".country-container");
const searchInput = document.querySelector("#country");
const btnEl = document.querySelector(".button");

const COUNTRY_URL = " https://restcountries.com/v3.1/all";

const fetchCountry = async () => {
  try {
    const res = await fetch(`${COUNTRY_URL}`);
    const countryData = await res.json();
    console.log(countryData);
  } catch (error) {
    console.error(error);
  }
};
fetchCountry();
