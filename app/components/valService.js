import Val from "../models/val.js";


let _state = {
  vals: [new Val({ to: 'you', from: 'Devteam', message: 'You are the "MAIN" tag in my HTML!' })]
}


let _subscribers = {
  vals: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}


export default class ValService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
  constructor() {
    console.log('services working')
  }
  addVal(rawVal) {
    let val = new Val(rawVal)
    let updatedArr = [..._state.vals, val]
    setState('vals', updatedArr)
  }
  get Vals() {
    return _state.vals
  }
}