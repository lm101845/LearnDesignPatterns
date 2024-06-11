/**
 * @Author liming
 * @Date 2024/6/11 12:01
 **/

//外观模式实现
function addEvent(dom,type,fn){
    //对于支持DOM2级事件处理程序addEventListener方法的浏览器
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
        //对于不支持addEventListener方法但支持attachEvent方法的浏览器
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
        //对于不支持addEventListener方法，也不支持attachEvent方法，但支持on+'事件名'的浏览器
    }else{
        dom['on'+type] = fn;
    }
}

var myInput = document.getElementById('myinput');
addEvent(myInput,'click',function(){
    console.log('绑定第一个事件');
});

addEvent(myInput,'click',function(){
    console.log('绑定第二个事件');
})

addEvent(myInput,'click',function(){
    console.log('绑定第三个事件');
})