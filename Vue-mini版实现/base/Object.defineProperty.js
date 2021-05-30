const obj = {
  name: 'xiuyan',
  career: 'coder'
}
Object.defineProperty(obj, 'career2', {
  // getter 方法
  enumberable: true,
  configurable: true,
  get() {
    console.log('尝试读取')
    return 123
  },
  set(newCareer) {
    console.log(`换成了${newCareer}`)
  },
});

console.log("???", obj)
//obj.career = "123"