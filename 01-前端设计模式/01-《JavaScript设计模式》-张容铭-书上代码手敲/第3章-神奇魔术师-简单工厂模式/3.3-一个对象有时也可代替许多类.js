/**
 * @Author liming
 * @Date 2024/5/29 10:22
 **/
//工厂模式
function createBook(name, time, type) {
    //创建一个对象，并对对象拓展属性和方法
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function () {
        console.log(this.name);
    };
    //将对象返回
    return o;
}

var boo1 = createBook('js book', 2014, 'js');
var boo2 = createBook('css book', 2013, 'css');

boo1.getName();
boo2.getName();

console.log('====================================')

function createPop(type, text) {
    //创建一个对象，并对对象拓展属性和方法
    var o = new Object();
    o.content = text;
    o.show = function () {
        //显示方法
    };
    if (type === 'alert') {
        //警示框差异部分
    }
    if (type === 'prompt') {
        //提示框差异部分
    }
    if (type === 'confirm') {
        //确认框差异部分
    }
    return o;
}

//创建警示框
var userNameAlert = createPop('alert', '用户名只能是26个字母和数字');