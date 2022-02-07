//发布-订阅模式
function EventEmitter() {
  this.__events = {}
}

EventEmitter.prototype.on = function (eventName, listener) {
  let events = this.__events
  events[eventName] = listener
  return this //EventEmitter对象
}

EventEmitter.prototype.emit = function (eventName, args) {
  if (this.__events[eventName]) {
    let listener = this.__events[eventName]
    listener.apply(this, args || [])
  }
}

EventEmitter.prototype.off = function (eventName) {
  this.__events[eventName] = null
}
