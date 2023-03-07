import { appState } from "../AppState.js"

class CoinsService {
    addCoin() {
        appState.coins++
        console.log(appState.coins);
    }

}

export const coinsService = new CoinsService()