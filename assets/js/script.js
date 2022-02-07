// Burger Menu animation
const headerMenu = document.getElementById("headerMenu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");

headerMenu.onclick = () => {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
};

// Crypto API

const API =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=EYDAuGDgIKjk&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=4&offset=0";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "24cbac2ba2msh293824c46e1dd84p1e4affjsna18d0ac8c17e",
  },
};

const getAPI = (api) => {
  return fetch(api, options)
    .then((response) => response.json())
    .then((coins) => fillTable(coins.data.coins))

    .catch((err) => {
      console.error("API error ", err);
    });
};

const fillTable = (coins) => {
  let cryptocoins = "";
  coins.forEach((coin) => {
    cryptocoins += `<tr>
                    <td class="text-center"> ${coin.rank} </td>
                    <td><img src="${coin.iconUrl}"> ${
      coin.name + " " + coin.symbol
    } </td>
    <td class="text-center text-sm-left"> ${coin.price} PEN</td>
    <td class="text-center text-sm-left"> ${coin.change} % </td>
    </tr>`;
  });

  cryptocoins += `<tr>
                    <td class="text-center">5</td>
                    <td><img src="./assets/images/poicoin_hero.png" alt="poiocoin"> PoioCoin PIO</td>
                    <td class="text-center text-sm-left"> 439,08 PEN</td>
                    <td class="text-center text-sm-left"> 3,30 %</td>
                    </tr>`;

  document.getElementById("data").innerHTML += cryptocoins;
};

if (window.location.pathname == "/") {
  getAPI(API);
}
