/**
 * @Author liming
 * @Date 2024/5/30 9:45
 **/

//创建Java学科类
var Java = function (content){
    //将内容保存在content里面以便以后使用
    this.content = content;
   //创建对象时，通过闭包，直接执行display方法
    (function (content){
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.color = 'green';
        document.getElementById('container').appendChild(div);
    })()
}

//创建PHP学科类
var Php = function (content){
    this.content = content;
    (function (content){
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.color = 'yellow';
        document.getElementById('container').appendChild(div);
    })(content)
}

console.log('========================================================')



