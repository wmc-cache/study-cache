const obj = {
  name: 'xiuyan',
  career: 'coder'
}
Object.defineProperty(obj, 'career', {
  // getter 方法
  get() {
    console.log('尝试读取')
  },
  // setter 方法
  set(newCareer) {
    console.log(`换成了${newCareer}`)
  },
});

console.log("???", obj.career)
obj.career = "123"