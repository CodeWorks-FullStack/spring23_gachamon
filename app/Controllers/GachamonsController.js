import { appState } from "../AppState.js"
import { gachamonsService } from "../Services/GachamonsService.js"
import { setHTML } from "../Utils/Writer.js"

// NOTE bc this is outside of the class, we use 'function' to declare/define it
function _drawGachamons() {
    console.log('drawing gachamons')
    let gachamons = appState.gachamons
    let template = ''
    gachamons.forEach(g => template += g.ListTemplate)
    // REVIEW first arg is the 'id' from HTML, second arg is what we want to inject
    setHTML('gachamons', template)
}

function _drawActive() {
    console.log('drawing active');
    let gachamon = appState.activeGachamon
    setHTML('active', gachamon.ActiveTemplate)
}

function _drawMyGachamons() {
    // debugger
    console.log('drawing my mons');
    let myGachamons = appState.myGachamons
    let template = ''
    myGachamons.forEach(g => template += g.ListTemplate)
    setHTML('myGachamons', template)
}

export class GachamonsController {
    constructor() {
        // NOTE anything here in the constructor will happen as soon as the page is loaded (built)
        console.log('hello from the gachamons controller')
        _drawGachamons()
        _drawMyGachamons()
        // REVIEW appstate.on listens for changes in the appstate, first arg is the name of the collection I want to observe, second arg is what I want to happen if it changes
        appState.on('activeGachamon', _drawActive)
        appState.on('myGachamons', _drawMyGachamons)
    }

    setActive(gachamonName) {
        // debugger
        console.log(gachamonName, 'setting active');
        gachamonsService.setActive(gachamonName)
    }

    dispense() {
        console.log('dispensing mon');
        gachamonsService.dispense()
    }

}