/**
 * @Author liming
 * @Date 2024/5/28 9:12
 **/

//利用闭包实现
let Book = (function () {
    //静态私有变量
    let bookNum = 0;
    //静态私有方法
    function checkBook(name) {}

    //返回构造函数
    return function (newId, newName, newPrice) {
        let name,price;
        //私有方法
        function checkID(id) {
            //特权方法
            this.getName = function () {};
            this.getPrice = function () {};
            this.setName = function () {};
            this.setPrice = function () {};
            //公有属性
            this.id = newId;
            //公有方法
            this.copy = function () {};
            bookNum++;
            if(bookNum > 100){
                throw new Error('我们仅出版100本书')
            }
            //构造器
            this.setName(name);
            this.setPrice(price);
        }
    }
})()

Book.prototype = {
    //静态公有属性
    isJSBook: false,
    //静态公有方法
    display: function () {}
}