//宏观上看，咱们说“收集依赖”，是指 watcher 去收集自己所依赖的数据属性；
//不过从实现上来看，实际上是把 watcher 对象推入了 dep 实例的队列里，
//更像是 dep 在“收集” watcher。

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    // data中的属性名称 
    this.key = key;
    // 回调函数负责更新视图
    this.cb = cb;

    // 把Watcher对象变化的时候更新视图
    Dep.target = this;
    // 触发get方法, 在get方法中调用addSub
    this.oldValue = vm[key];
    Dep.target = null
  }
  // 当数据发生变化的时候更新视图
  update() {
    let newValue = this.vm[this.key];
    // 判断新值和旧值是否相等
    if (this.oldValue === newValue) {
      return
    }
    this.cb(newValue)
  }
}