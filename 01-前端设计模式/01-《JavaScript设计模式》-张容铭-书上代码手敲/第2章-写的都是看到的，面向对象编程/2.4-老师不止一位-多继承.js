/**
 * @Author liming
 * @Date 2024/5/28 14:13
 **/
//单继承-属性复制
let extend = function (target, source) {
    //遍历源对象中的属性
    for (let property in source) {
        //将源对象中的属性复制到目标对象中
        target[property] = source[property];
    }
    //返回目标对象
    return target;
}

let otherBook = {}
let book = {
    name: 'js book',
    alike: ['css book', 'html book']
}

let book2 = {
    like: 'hello',
    sayhi: ['hi', 'bye']
}

let anotherBook = {
    color: 'blue'
}

extend(anotherBook, book);
console.log(anotherBook.name); //js book
console.log(anotherBook.alike); //["css book", "html book"]

console.log('================')

anotherBook.alike.push('ajax book');
anotherBook.name = 'design pattern book';
console.log(anotherBook.alike); //["css book", "html book", "ajax book"]
console.log(anotherBook.name); //design pattern book
console.log(book.alike); //["css book", "html book", "ajax book"]
console.log(book.name); //js book

console.log('=======8888888888=========')


//多继承-属性复制
Object.prototype.mix = function () {
    //从第二个参数起为被继承的对象
    let i = 1
    //获取参数长度
    let len = arguments.length
    //目标对象为第一个参数
    let target = arguments[0]
    //缓存参数对象
    let arg

    //遍历被继承的对象
    for (; i < len; i++) {
        //缓存当前对象
        arg = arguments[i]
        //遍历被继承对象中的属性
        for (let property in arg) {
            //将被继承对象中的属性复制到目标对象中
            target[property] = arg[property]
        }
    }
    return target
}

console.log(otherBook.mix(book,book2))
