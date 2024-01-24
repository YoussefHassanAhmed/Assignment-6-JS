import { UI } from "./UI.js";

export class Details {
    constructor(id) {
        this.ui = new UI();
  
        document.getElementById("btnClose").addEventListener("click", () => {
           document.querySelector(".Games").classList.remove("d-none");
           document.querySelector(".details").classList.add("d-none");
        });
  
        this.getDetails(id);
     }
   
   
    async getDetails(idGame) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e23d9fcbb3msh5a9f395d7294a91p1b9095jsnbfb088c8496c',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const detailsApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options)
        let detailsData = await detailsApi.json()
        this.ui.displayDetales(detailsData)
        loading.classList.add("d-none");

    }
}
