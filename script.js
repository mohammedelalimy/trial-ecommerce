
let user = new Object({
  name:"Mohamed",
  age:34,
  fun:function(){
    return `hello ${this.name} you're welcome`
  }
})

let user1 = Object.create(user)
user1.name="ahmed"
console.log(user1.fun())