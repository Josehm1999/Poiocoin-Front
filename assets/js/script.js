// Burger Menu animation
const headerMenu = document.getElementById("headerMenu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");

headerMenu.onclick = () => {
  console.log("Funciona :D");
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

getAPI(API);

class Footer extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });

    this.footer = document.createElement("footer");
    this.footer.classList.add("footer", "px-5", "py-5", "text-center");
    this.footer.innerHTML = `<a class="footer__logo d-inline-block mb-4 mb-lg-0" href="#">
             <img src="./assets/images/Poiocoin_logo3.png" alt="poiocoin">
        </a>

        <div class="footer__social mb-4 mb-lg-0">
            <a href="#">
                <img src="./assets/images/icon-facebook.svg" alt="Facebook">
            </a>
            <a href="#">
                <img src="./assets/images/icon-twitter.svg" alt="Twitter">
            </a>
            <a href="#">
                <img src="./assets/images/icon-youtube.svg" alt="Youtube">
            </a>
            <a href="#">
                <img src="./assets/images/icon-instagram.svg" alt="Instagram">
            </a>
            <a href="#">
                <img src="./assets/images/icon-pinterest.svg" alt="Pinterest">
            </a>
        </div>

        <div class="footer__links col1">
            <a href="./index.html">Home</a>
            <a href="./wallet.html">Wallet</a>
            <a href="./about.html">About</a>
        </div>

        <div class="footer__links col2">
            <a href="./HowToStart.html">Com&oacute; empezar?</a>
            <a href="./whyUse.html">Por qu&eacute; Poiocoin?</a>
        </div>
        <div class="footer__cta mb-4 mb-lg-0">
            <a href="#" class="button">Registrate</a>
        </div>
        <div class="footer__copyright">&copy; 2022 Poiocoin. All Rights Reserved.
        </div>
`;
    shadow.appendChild(this.footer);
  }
}

customElements.define("app-footer", Footer);
