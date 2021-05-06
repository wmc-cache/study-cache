//发布-订阅模式
function EventEmitter() {
  this.__events = {}
}

//on
EventEmitter.prototype.on = function (eventName, listener) {

  if (!eventName || !listener) {
    return;
  }

  // 判断回调的 listener 是否为函数

  if (!isValidListener(listener)) {

    throw new TypeError('listener must be a function');

  }

  let events = this.__events;

  var listeners = events[eventName] = events[eventName] || [];

  var listenerIsWrapped = typeof listener === 'object';

  // 不重复添加事件，判断是否有一样的

  if (indexOf(listeners, listener) === -1) {

    listeners.push(listenerIsWrapped ? listener : {

      listener: listener,

      once: false

    });

  }
  //console.log("this", this)

  return this; //EventEmitter对象

};

// 判断是否是合法的 listener

function isValidListener(listener) {

  if (typeof listener === 'function') {

    return true;

  } else if (listener && typeof listener === 'object') {

    return isValidListener(listener.listener);

  } else {

    return false;

  }

}

// 顾名思义，判断新增自定义事件是否存在

function indexOf(array, item) {

  var result = -1

  item = typeof item === 'object' ? item.listener : item;

  for (var i = 0, len = array.length; i < len; i++) {

    if (array[i].listener === item) {

      result = i;

      break;

    }

  }

  return result;

}




// emit
EventEmitter.prototype.emit = function (eventName, args) {

  // 直接通过内部对象获取对应自定义事件的回调函数

  var listeners = this.__events[eventName];

  if (!listeners) return;

  // 需要考虑多个 listener 的情况

  for (var i = 0; i < listeners.length; i++) {

    var listener = listeners[i];

    if (listener) {

      listener.listener.apply(this, args || []);

      // 给 listener 中 once 为 true 的进行特殊处理

      if (listener.once) {

        this.off(eventName, listener.listener)

      }

    }

  }

  return this;

};


//off
EventEmitter.prototype.off = function (eventName, listener) {

  var listeners = this.__events[eventName];

  if (!listeners) return;

  var index;

  for (var i = 0, len = listeners.length; i < len; i++) {

    if (listeners[i] && listeners[i].listener === listener) {

      index = i;

      break;

    }

  }

  // off 的关键

  if (typeof index !== 'undefined') {

    listeners.splice(index, 1, null)

  }

  return this;

};





