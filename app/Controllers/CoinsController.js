import { appState } from "../AppState.js"
import { coinsService } from "../Services/CoinsService.js"
import { setText } from "../Utils/Writer.js"

function _drawCoins() {
    console.log('drawing coins')
    // debugger
    let template = ''
    for (let i = 0; i < appState.coins; i++) {
        template += '🪙'
    }
    // NOTE works just like setHTML but only alters innerText
    setText('coins', template)
}

export class CoinsController {
    constructor() {
        console.log('hello from the coins controller')
        appState.on('coins', _drawCoins)
    }

    addCoin() {
        console.log('adding coin')
        coinsService.addCoin()
    }
}