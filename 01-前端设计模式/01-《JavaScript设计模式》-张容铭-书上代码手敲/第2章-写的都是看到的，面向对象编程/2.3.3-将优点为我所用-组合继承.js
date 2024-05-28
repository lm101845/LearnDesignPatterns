/**
 * @Author liming
 * @Date 2024/5/28 10:07
 **/

//组合式继承
//声明父类
function SuperClass(name) {
    console.log('SuperClass构造函数执行了')
    //值类型共有属性
    this.name = name;
    //引用类型共有属性
    this.books = ['html', 'css', 'javascript'];
}

//父类原型共有方法
SuperClass.prototype.getName = function () {
    console.log(this.name);
};

//声明子类
function SubClass(name, time) {
    //构造函数式继承父类name属性
    SuperClass.call(this, name);
    //子类中新增共有属性
    this.time = time;
}

//类式继承 子类原型继承父类
SubClass.prototype = new SuperClass();

/**
 * 在子类构造函数中执行父类构造函数，在子类原型上实例化父类就是组合模式
 * 这样就融合了类式继承和构造函数继承的优点，但是子类的实例会调用两次父类的构造函数
 */
//子类原型方法
SubClass.prototype.getTime = function () {
    console.log(this.time);
};

let instance1 = new SubClass('js book', 2024);
instance1.books.push('设计模式');
console.log(instance1.books);
instance1.getName();
instance1.getTime();

console.log('=================')

let instance2 = new SubClass('css book', 2025);
console.log(instance2.books);
instance2.getName();
instance2.getTime();