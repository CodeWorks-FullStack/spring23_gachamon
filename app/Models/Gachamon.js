import { appState } from "../AppState.js"

export class Gachamon {
    constructor(data) {
        this.name = data.name
        this.emoji = data.emoji
        this.skin = data.skin
        this.rarity = data.rarity
    }

    // NOTE 'getters' work as additional properties and accessed with dot notation
    get ListTemplate() {
        return `
        <h3 class="col-1 skin-${this.skin}" onclick="app.gachamonsController.setActive('${this.name}')">${this.emoji}</h3>
    `
    }

    get ActiveTemplate() {
        return `
        <div class="col-8 elevation-5 rounded text-center p-3">
          <h1 class="skin-${this.skin} active-emoji">${this.emoji}</h1>
          <h2>${this.name}</h2>
          <h3>${this.rarity} | Inventory: ${this.ComputeInventory}</h3>
        </div>`
    }


    // REVIEW compute properties that are unique to ea. object or instance of my model
    // NOTE for example: ea. one of these gachamons will have their own inventory count
    // NOTE good for rendering/adding additional properties according to a condition
    get ComputeInventory() {
        let myGachamons = appState.myGachamons
        let count = myGachamons.filter(g => g.name == this.name)
        return count.length
    }

}