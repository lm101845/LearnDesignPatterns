/**
 * @Author liming
 * @Date 2024/6/18 8:23
 **/

//多元变量类
//运动单元

function Speed(x, y) {
    this.x = x;
    this.y = y;
}

Speed.prototype.run = function () {
    console.log('运动起来');
}

//着色单元
function Color(cl) {
    this.color = cl;
}

Color.prototype.draw = function () {
    console.log('绘制色彩');
}

//变形单元
function Shape(sp) {
    this.shape = sp;
}

Shape.prototype.change = function () {
    console.log('改变形状');
}

//说话单元
function Speek(wd) {
    this.word = wd;
}

Speek.prototype.say = function () {
    console.log('书写字体');
}

//创建一个球类，他可以运动也可以着色
function Ball(x, y, c) {
    this.speed = new Speed(x, y);
    this.color = new Color(c);
}

Ball.prototype.init = function () {
    this.speed.run();
    this.color.draw();
}

//创建一个人类，他可以运动，着色，改变形状
function People(x, y, c, s) {
    this.speed = new Speed(x, y);
    this.color = new Color(c);
    this.shape = new Shape(s);
}

People.prototype.init = function () {
    this.speed.run();
    this.color.draw();
    this.shape.change();
}

var p = new People(1, 2, 'red', 'triangle');
p.init();