
class Emitter {
  private events:any = {}
  public on (name:string,fn:()=>void){
   this.events[name] = fn
  }
  public emit (name:string,args?:[]){
      if(this.events[name]){
        this.events[name]()
      }
  }
  public off (name:string){
    this.events[name] = null
  }
}

const emitter =  new Emitter()

emitter.on('wmc',()=>{
  console.log(123)
}
)

emitter.emit("wmc")
emitter.emit("wmc")
emitter.off('wmc')
emitter.emit("wmc")

