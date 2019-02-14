import ValService from "./valService.js";

let _valService = new ValService

function draw() {
  let template = ''
  let vals = _valService.Vals
  for (let i = 0; i < vals.length; i++) {
    template += vals[i].getTemplate()
  }
  document.getElementById('cards').innerHTML = template
}


export default class ValController {
  constructor() {
    console.log('controller working')
    _valService.addSubscriber("vals", draw)
    draw()
  }
  addVal(event) {
    event.preventDefault()
    let form = event.target
    let val = {
      to: form.to.value,
      from: form.from.value,
      message: form.message.value
    }
    _valService.addVal(val)
    form.reset()
  }
}