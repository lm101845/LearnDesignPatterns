/**
 * @Author liming
 * @Date 2024/6/12 11:50
 **/

function doSomething(obj) {
    var _adapter = {
        name: '姓名',
        title: '职位',
        age: '年龄',
        color: '皮肤颜色',
        size: '衣服尺寸',
        price: '价格'
    }

    for (var i in _adapter) {
        _adapter[i] = obj[i] || _adapter[i]
    }
}

/**
 * 这段JavaScript代码定义了一个名为`doSomething`的函数，该函数接收一个对象作为参数`obj`。
 *
 * 在函数内部，首先定义了一个名为`_adapter`的对象，这个对象有六个属性：`name`、`title`、`age`、`color`、`size`和`price`，每个属性的值都是一个字符串。
 *
 * 然后，函数使用一个for-in循环遍历`_adapter`对象的每一个属性。对于每一个属性，如果`obj`对象有相同的属性，并且该属性的值不是`undefined`或`null`，那么就将`_adapter`对象的相应属性的值设置为`obj`对象的相应属性的值。如果`obj`对象没有相同的属性，或者该属性的值是`undefined`或`null`，那么`_adapter`对象的相应属性的值保持不变。
 *
 * 这种模式通常被称为"参数适配器"模式，它的目的是提供一种灵活的方式来处理函数参数。通过这种方式，即使调用函数的时候没有提供所有的参数，函数也能使用默认的值进行处理。
 */