import { Details } from "./details.js";
import { UI } from "./UI.js";


 export class Games{
  
    constructor() {
        this.getGames("mmorpg");
        document.querySelectorAll(".nav-link").forEach((link) => {
           link.addEventListener("click", (e) => {
              document.querySelector(".navbar-nav .active").classList.remove("active");
              link.classList.add("active")
              let category = link.dataset.category
              this.getGames(category);
           });
        });
  
        this.Ui = new UI();
     }
     async getGames(category){ 
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e23d9fcbb3msh5a9f395d7294a91p1b9095jsnbfb088c8496c',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const gameApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` ,options)
        let gameData = await gameApi.json()
        this.Ui.displayDataGame(gameData)
        this.startEvent();
        loading.classList.add("d-none");
     }

     startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              this.seeDetails(id);
           });
        });
     }
  
     seeDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".Games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
     }
  }


  
  
 