import { CoinsController } from "./Controllers/CoinsController.js";
import { GachamonsController } from "./Controllers/GachamonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // NOTE here we 'register' our controllers
  // NOTE if we don't import controller here, we don't have access to it 
  // valuesController = new ValuesController();

  gachamonsController = new GachamonsController();

  coinsController = new CoinsController();
}

window["app"] = new App();
