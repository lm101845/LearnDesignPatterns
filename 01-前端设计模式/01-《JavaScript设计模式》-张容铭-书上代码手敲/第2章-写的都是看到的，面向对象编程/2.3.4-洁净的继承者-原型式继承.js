/**
 * @Author liming
 * @Date 2024/5/28 10:30
 **/

//原型式继承——对类式继承的一个封装
function inheritObject(o){
    //声明一个过渡函数对象
    function F(){}
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

let book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
}

let newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');
console.log(newBook.name); //ajax book
console.log(newBook.alikeBook); //["css book", "html book", "xml book", "as book"]

console.log('======================')


let otherBook = inheritObject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');

console.log(otherBook.name); //flash book
console.log(otherBook.alikeBook); //["css book", "html book", "xml book", "as book"]
console.log('========================')

console.log(book.name)
console.log(book.alikeBook)