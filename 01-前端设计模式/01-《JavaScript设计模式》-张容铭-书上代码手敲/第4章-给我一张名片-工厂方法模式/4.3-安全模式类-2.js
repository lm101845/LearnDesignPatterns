/**
 * @Author liming
 * @Date 2024/5/30 9:55
 **/

var Demo = function () {
    if (!(this instanceof Demo)) {
        return new Demo()
    }
}

Demo.prototype = {
    show:function () {
        console.log('这是一个安全模式类')
    }
}

var d = new Demo()
d.show()
var e = Demo()
e.show()