import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js";

class GachamonsService {

    setActive(gachamonName) {
        // console.log(gachamonName, 'set active from service')
        // NOTE first I need to find the gachamon that I clicked on
        let foundGachamon = appState.gachamons.find(g => g.name == gachamonName)
        console.log(foundGachamon);
        // NOTE set the active gachamon as the gachamon that was found from the onclick
        appState.activeGachamon = foundGachamon
    }

    dispense() {
        // TODO get a random gachamon from the array
        // TODO set the randomly found gachamon to the activeGachamon in the AppState
        if (appState.coins > 0) {
            appState.coins--
            let randomIndex = Math.floor(Math.random() * appState.gachamons.length)
            let randomGachamon = appState.gachamons[randomIndex]
            console.log(randomGachamon, 'random')
            // NOTE as soon as I reassign the value of the appstate, the observer is triggered
            appState.activeGachamon = randomGachamon

            appState.myGachamons.push(randomGachamon)
            console.log(appState.myGachamons, 'my mons');

            // REVIEW localStorage works with key:value pairs. the first arg is the 'key' (password) that localStorage uses to save the second arg (our data) under
            saveState('gachamonCollection', appState.myGachamons)

            // NOTE manually trigger the observer listening to this collection
            // NOTE ea. collection needs its own emit
            appState.emit('myGachamons')

        } else {
            window.alert("Give me some moneyyyyyyy")
        }
    }

}

export const gachamonsService = new GachamonsService()