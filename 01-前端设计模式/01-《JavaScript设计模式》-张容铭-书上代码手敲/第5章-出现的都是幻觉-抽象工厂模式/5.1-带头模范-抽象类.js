/**
 * @Author liming
 * @Date 2024/5/31 10:39
 **/

//汽车抽象类，当使用其实例对象的方法时会抛出错误
var Car = function () {}

Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}