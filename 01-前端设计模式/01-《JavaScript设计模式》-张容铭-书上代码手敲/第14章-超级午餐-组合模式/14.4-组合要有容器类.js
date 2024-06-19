/**
 * @Author liming
 * @Date 2024/6/18 11:53
 **/

/**
 * `News.call(this)` 这行代码的作用是调用 `News` 函数，同时将 `this` 上下文设置为 `Container` 的实例。
 * 这是 JavaScript 中实现继承的一种方式，称为借用构造函数或经典继承。
 *
 * 在这个例子中，`News.call(this)` 会执行 `News` 函数，
 * 同时将 `News` 函数内部的 `this` 指向 `Container` 的实例。这样，`News` 中定义的所有属性和方法都会被添加到 `Container` 的实例上。
 *
 * 这个函数是立即执行的，也就是说，当我们创建一个新的 `Container` 实例时，
 * `News.call(this)` 会立即被调用。
 *
 * 如果不写 `News.call(this)`，那么 `this.init()` 是否可以正确执行，
 * 取决于 `init` 方法在 `Container` 中是否被定义。如果 `init` 方法是在
 * `News` 中定义的，那么不写 `News.call(this)`，
 * `this.init()` 就会报错，因为 `Container` 的实例上没有 `init` 方法。
 * 如果 `init` 方法在 `Container` 中被定义或者在 `Container` 的原型链上，
 * 那么 `this.init()` 可以正确执行。
 */

/**
 * 这段代码是使用 JavaScript 实现的一种设计模式——组合模式。组合模式允许你将对象组合成树形结构来表示"部分-整体"的层次结构，使得客户端对单个对象和组合对象的使用具有一致性。
 *
 * 在这段代码中，定义了四个类：`Container`、`Item`、`NewsGroup` 和 `News`。
 *
 * 1. `News` 是一个基类，它定义了一些通用的方法和属性，如 `init`、`add` 和 `getElement`，但这些方法在 `News` 类中并没有具体实现，需要在子类中重写。
 *
 * 2. `Container`、`Item` 和 `NewsGroup` 都是 `News` 的子类，它们通过 `News.call(this)` 继承了 `News` 的属性，并通过 `inheritPrototype(Container, News)` 继承了 `News` 的方法。这三个类都重写了 `News` 类中的 `init`、`add` 和 `getElement` 方法，以实现各自的功能。
 *
 * 3. `Container` 类表示一个容器，它可以包含其他的 `Container`、`Item` 或 `NewsGroup`。它有一个 `ul` 元素作为其 DOM 结构。
 *
 * 4. `Item` 类表示一个列表项，它可以包含其他的 `Container`、`Item` 或 `NewsGroup`。它有一个 `li` 元素作为其 DOM 结构。
 *
 * 5. `NewsGroup` 类表示一个新闻组，它可以包含其他的 `Container`、`Item` 或 `NewsGroup`。它有一个 `div` 元素作为其 DOM 结构。
 *
 * 这样，你就可以通过组合这些类的实例，来创建出复杂的 DOM 结构。例如，你可以创建一个 `Container`，然后向其中添加多个 `Item` 和 `NewsGroup`，每个 `NewsGroup` 又可以包含多个 `Item`，以此类推。
 * @param id
 * @param parent
 * @constructor
 */
//容器类构造函数
var Container = function (id, parent) {
    //构造函数继承父类
    News.call(this)
    //模块id
    this.id = id
    //模块的父容器
    this.parent = parent
    //构建方法
    this.init()
}

//寄生式继承父类原型方法
inheritPrototype(Container, News)

//构建方法
Container.prototype.init = function () {
    this.element = document.createElement('ul')
    this.element.id = this.id
    this.element.className = 'new-container'
}

//添加子元素方法
Container.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
}

//获取当前元素方法
Container.prototype.getElement = function () {
    return this.element
}

//显示方法
Container.prototype.show = function () {
    this.parent.appendChild(this.element)
}
console.log('=========================')

//下一层级的行成员集合类以及后面的新闻组合体类实现的方式与其类似
var Item = function (classname) {
    News.call(this)
    this.classname = classname || ''
    this.init()
}
inheritPrototype(Item, News)

Item.prototype.init = function () {
    this.element = document.createElement('li')
    this.element.className = this.classname
}

Item.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
}

Item.prototype.getElement = function () {
    return this.element
}
console.log('========================')

var NewsGroup = function (classname) {
    News.call(this)
    this.classname = classname || ''
    this.init()
}

inheritPrototype(NewsGroup, News)

NewsGroup.prototype.init = function () {
    this.element = document.createElement('div')
    this.element.className = this.classname
}

NewsGroup.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
}

NewsGroup.prototype.getElement = function () {
    return this.element
}
