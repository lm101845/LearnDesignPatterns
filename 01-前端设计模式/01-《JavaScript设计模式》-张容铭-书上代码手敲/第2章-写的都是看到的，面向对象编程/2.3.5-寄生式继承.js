/**
 * @Author liming
 * @Date 2024/5/28 10:43
 **/

//寄生式继承——对原型继承的二次封装
//声明基对象
let book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
}

function createBook(obj){
    //通过原型继承方式创建新对象
    let o = new inheritObject(obj);
    //拓展新对象
    o.getName = function(){
        console.log(name);
    }
    //返回拓展后的新对象
    return o;
}
