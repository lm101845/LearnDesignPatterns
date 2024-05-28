/**
 * @Author liming
 * @Date 2024/5/28 10:52
 **/
console.log('start---')
//原型式继承——对类式继承的一个封装
/**
 * 这个函数是原型式继承的实现。它创建了一个空的中间对象F，
 * 然后将这个对象的原型设置为传入的对象o，最后返回这个新的对象。
 * 这样，返回的对象就能够访问o的所有属性和方法。
 * @param o
 * @returns {F}
 */
function inheritObject(o){
    console.log('inheritObject函数执行开始')
    //声明一个过渡函数对象
    function F(){}
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

/**
 * 这个函数实现了寄生式继承。它首先创建了一个父类原型的一个副本，
 * 然后修复了因重写子类原型导致子类的constructor属性被修改的问题，
 * 最后将子类的原型设置为这个副本。
 * 这样，子类就能够访问父类的所有属性和方法，同时还能添加自己的属性和方法。
 * @param subClass
 * @param superClass
 */
function inheritPrototype(subClass,superClass) {
    console.log('inheritPrototype函数开始执行')
    // 复制一份父类的原型副本保存在变量中
    let p = inheritObject(superClass.prototype)
    //修改因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subClass
    //设置子类的原型
    subClass.prototype = p
    console.log('inheritPrototype函数执行结束')
}

//定义父类
/**
 * 这是一个父类构造函数，它有一个name属性和一个colors属性。
 * @param name
 * @constructor
 */
function SuperClass(name) {
    console.log('SuperClass构造函数开始')
    this.name = name
    this.colors = ['red','blue','green']
    console.log('SuperClass构造函数结束')
}

//定义父类原型方法,用于打印name属性。
SuperClass.prototype.getName = function () {
    console.log(this.name)
}

//定义子类
/**
 * 这是一个子类构造函数，它首先调用父类构造函数来继承父类的属性，
 * 然后添加了一个自己的time属性。
 * @param name
 * @param time
 * @constructor
 */
function SubClass(name,time) {
    console.log('SubClass构造函数开始执行')
    //构造函数式继承
    SuperClass.call(this,name)
    //子类新增属性
    this.time = time
    console.log('SubClass构造函数执行结束')
}

//寄生式继承父类原型
inheritPrototype(SubClass,SuperClass)

//子类新增原型方法
SubClass.prototype.getTime = function () {
    console.log('SubClass原型方法开始执行')
    console.log(this.time)
}

//创建两个测试方法
let instance1 = new SubClass('js book',2014)
let instance2 = new SubClass('css book',2013)

instance1.colors.push('black')
console.log(instance1.colors)
console.log(instance2.colors)

instance2.getName()
instance2.getTime()
console.log('end---')
