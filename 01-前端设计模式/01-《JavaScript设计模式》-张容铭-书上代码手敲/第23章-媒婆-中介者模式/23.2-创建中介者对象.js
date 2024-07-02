/**
 * @Author liming
 * @Date 2024/7/2 12:15
 **/

//中介者对象
var Mediator = function () {
    //消息对象
    var _msg = {};
    return {
        /**
         * 订阅消息方法
         * @param type
         * @param action
         */
        register: function (type, action) {
            if (_msg[type]) {
                _msg[type].push(action)
            } else {
                _msg[type] = [action]
            }
        },
        /**
         * 发布消息方法
         */
        send: function (type) {
            if (_msg[type]) {
                for (var i = 0, len = _msg[type].length; i < len; i++) {
                    //执行回调函数
                    _msg[type][i] && _msg[type][i]()
                }
            }
        }
    }
}()

Mediator.register('demo', function () {
    console.log('first')
})

Mediator.register('demo', function () {
    console.log('second')
})

Mediator.send('demo') // first second