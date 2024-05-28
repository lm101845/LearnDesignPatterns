/**
 * @Author liming
 * @Date 2024/5/28 8:50
 **/

let Book = function (id, bookName, price) {
    this.id = id;
    this.bookName = bookName;
    this.price = price;
}

Book.prototype.display = function () {
    //展示这本书
}

//或者
Book.prototype = {
    display: function () {}
}

let book = new Book(10, 'JavaScript设计模式', 50);
console.log(book.bookName)