/**
 * @Author liming
 * @Date 2024/5/30 10:02
 **/
//安全模式创建的工厂类
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}

//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function (content) {
        //将内容保存在content里面以便以后使用
        this.content = content;
        //创建对象时，通过闭包，直接执行display方法
        (function (content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'green';
            div.style.height = '30px';
            document.getElementById('container').appendChild(div);
        })(content)
    },
    JavaScript: function (content) {
        //将内容保存在content里面以便以后使用
        this.content = content;
        //创建对象时，通过闭包，直接执行display方法
        (function (content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'yellow';
            document.getElementById('container').appendChild(div);
        })(content)
    },
    UI: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            console.log(document.getElementById('container'))
            document.getElementById('container').appendChild(div);
        })(content);
    },
    php: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid blue';
            document.getElementById('container').appendChild(div);
        })(content);
    }
}

var data = [
    {type: 'JavaScript', content: 'JavaScript哪家强'},
    {type: 'UI', content: 'UI哪家强'},
    {type: 'Java', content: 'Java哪家强111'},
    {type: 'php', content: 'php哪家强'}
]

for (var i = 0, len = data.length; i < len; i++) {
    Factory(data[i].type, data[i].content)
}