/**
 * @Author liming
 * @Date 2024/5/30 9:48
 **/

//创建Java学科类
var Java = function(content){
    //...
}

//创建PHP学科类
var Php = function(content){
    //...
}

//创建JavaScript学科类
var JavaScript = function(content){
    this.content = content;
    (function(content){
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.color = 'pink';
        document.getElementById('container').appendChild(div);
    })(content)
}

//学科类工厂
function JobFactory(type, content){
    switch(type){
        case 'java':
            return new Java(content);
        case 'php':
            return new Php(content);
        case 'javascript':
            return new JavaScript(content);
    }
}

JobFactory('javascript', 'JavaScript学科内容');
