/**
 * @Author liming
 * @Date 2024/6/6 8:01
 **/

function g(id){
    return document.getElementById(id);
}

function css(id,key,value){
    //简单样式属性设置
    g(id).style[key] = value;
}

function attr(id,key,value){
    //设置属性
    g(id)[key] = value;
}

function html(id,value){
    //设置innerHTML
    g(id).innerHTML = value;
}

function on(id,type,fn){
    //事件绑定
    g(id)['on'+type] = fn;
}

