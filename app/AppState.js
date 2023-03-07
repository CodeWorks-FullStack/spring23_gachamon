import { Gachamon } from "./Models/Gachamon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE says that 'gachamons' is an array of this 'type': model Gachamon
  /** @type {import('./Models/Gachamon').Gachamon[]} */

  // gachamons = [
  //   new Gachamon({ name: 'Oslo', emoji: '🦧', skin: 0, rarity: '⭐⭐' }),
  //   new Gachamon('Koko', '🦍', 0, '⭐'),
  //   new Gachamon('Xanther', '🦈', 0, '⭐⭐'),
  //   new Gachamon('Albert', '🐩', 0, '⭐'),
  //   new Gachamon('Sly', '🦐', 0, '⭐'),
  //   new Gachamon('Glowing-Sly', '🦐', 1, '⭐'),
  //   new Gachamon('Justin', '🐖', 0, '⭐'),
  //   new Gachamon('Glowing-Justin', '🐖', 1, '⭐⭐'),
  //   new Gachamon('Gold-Justin', '🐖', 2, '⭐⭐⭐'),
  //   new Gachamon('Nega-Oslo', '🦧', 3, '⭐⭐⭐'),
  //   new Gachamon('Raymond', '🦣', 0, '⭐⭐'),
  //   new Gachamon('Gold-Raymond', '🦣', 2, '⭐⭐⭐'),
  // ]

  gachamons = [
    new Gachamon({ name: 'Oslo', emoji: '🦧', skin: 0, rarity: '⭐⭐' }),
    new Gachamon({ name: 'Koko', emoji: '🦍', skin: 0, rarity: '⭐' }),
    new Gachamon({ name: 'Xanther', emoji: '🦈', skin: 0, rarity: '⭐⭐' }),
    new Gachamon({ name: 'Albert', emoji: '🐩', skin: 0, rarity: '⭐' }),
    new Gachamon({ name: 'Sly', emoji: '🦐', skin: 0, rarity: '⭐' }),
    new Gachamon({ name: 'Glowing-Sly', emoji: '🦐', skin: 1, rarity: '⭐⭐' }),
    new Gachamon({ name: 'Justin', emoji: '🐖', skin: 0, rarity: '⭐' }),
    new Gachamon({ name: 'GLowing-Justin', emoji: '🐖', skin: 1, rarity: '⭐⭐' }),
    new Gachamon({ name: 'Gold-Justin', emoji: '🐖', skin: 2, rarity: '⭐⭐⭐' }),
    new Gachamon({ name: 'Mega-Oslo', emoji: '🦧', skin: 3, rarity: '⭐⭐⭐' }),
    new Gachamon({ name: 'Raymond', emoji: '🦣', skin: 0, rarity: '⭐⭐' }),
    new Gachamon({ name: 'Gold-Raymond', emoji: '🦣', skin: 2, rarity: '⭐⭐⭐' }),
  ]

  /** @type {import('./Models/Gachamon').Gachamon|null} */
  activeGachamon = null
  // NOTE here I like to use null vs {} bc we can use truthy/falsy logic
  // NOTE if null(falsy) else (truthy)
  // NOTE empty objects are truthy, even if they don't have any properties so they don't work w/ truthy/falsy logic

  coins = 0

  /** @type {import('./Models/Gachamon').Gachamon[]} */
  myGachamons = loadState('gachamonCollection', [Gachamon])
  // REVIEW loadState looks for the password (key), and loads into the data-type specifiec by the second arg
  // REVIEW we provide second arg so that our data is parsed into the correct model and not just a POJO
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
