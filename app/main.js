import ValController from "./components/valController.js";

ValController

class App {
  constructor() {
    this.controllers = {
      valController: new ValController
    }
    console.log('main is here')
  }
}

window.app = new App()