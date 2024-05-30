/**
 * @Author liming
 * @Date 2024/5/30 9:55
 **/

var Demo = function () {}

Demo.prototype = {
    show:function () {
        console.log('这是一个安全模式类')
    }
}

var d = new Demo()
d.show()
var e = Demo()
e.show() // 这里会报错，因为Demo()没有返回值，所以e是undefined