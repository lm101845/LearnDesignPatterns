/**
 * @Author liming
 * @Date 2024/5/28 9:00
 **/
//私有属性和私有方法，特权方法，对象公有属性和对象公有方法，构造器
let Book = function (id, name, price) {
    let num = 1; // 私有属性
    function checkId() { // 私有方法
    }
    this.getName = function () {} // 特权方法
    this.getPrice = function () {}
    this.setName = function () {}
    this.setPrice = function () {}
    this.id = id; // 对象公有属性
    this.copy = function () {} // 对象公有方法
    this.setName(name)
    this.setPrice(price)
}

Book.isChinese = true; // 类静态公有属性(对象不能访问)
Book.resetTime = function () {
    console.log('item')
} // 类静态公有方法(对象不能访问)
Book.prototype = {
    isJSBook: false, // 公有属性
    display: function () {}  // 公有方法
}

let b = new Book(11, 'JavaScript设计模式', 50)
console.log(b.num) // undefined
console.log(b.isChinese) // undefined
console.log(b.isJSBook) // false
console.log(b.id) // 11

console.log(Book.isChinese) // true
Book.resetTime() // item