/**
 * @Author liming
 * @Date 2024/6/25 12:13
 **/

//创建超级玛丽类
var MarryState = function () {
    //内部状态私有变量
    var _currentState = {},
        //动作与状态方法映射
        states = {
            jump: function () {
                console.log('jump')
            },
            move: function () {
                console.log('move')
            },
            shoot: function () {
                console.log('shoot')
            },
            squat: function () {
                console.log('squat')
            }
        }

    //动作控制类
    var Action = {
        //改变状态方法
        changeState: function () {
            var arg = arguments
            //重置内部状态
            _currentState = {}
            //如果有动作则添加动作
            if (arg.length) {
                for (var i = 0, len = arg.length; i < len; i++) {
                    _currentState[arg[i]] = true
                }
            }
            //返回动作控制类
            return this
        },
        //执行动作
        goes: function () {
            console.log('触发一次动作')
            for (var i in _currentState) {
                states[i] && states[i]()
            }
            return this
        }
    }
    //返回接口方法
    return {
        change: Action.changeState,
        goes: Action.goes
    }
}

MarryState()
    .change('jump', 'shoot')
    .goes()
    .goes()
    .change('shoot')
    .goes()