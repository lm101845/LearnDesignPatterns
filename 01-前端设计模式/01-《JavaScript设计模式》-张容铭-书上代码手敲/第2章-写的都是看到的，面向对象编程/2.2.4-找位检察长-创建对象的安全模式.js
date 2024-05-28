/**
 * @Author liming
 * @Date 2024/5/28 9:26
 **/
let Book = function (title, time, type) {
    this.title = title;
    this.time = time;
    this.type = type;
}

let book = Book('js', '2014', '前端');
console.log(book)   //undefined

console.log(window.title)
console.log(window.time)
console.log(window.type)

console.log('=============================')

let Book1 = function (title, time, type) {
    // 判断this是否是当前对象，如果是说明是通过new创建的实例
    if (this instanceof Book1) {
        this.title = title;
        this.time = time;
        this.type = type;
    } else {
        return new Book1(title, time, type)
    }
}

let book1 = Book1('js', '2014', '前端');