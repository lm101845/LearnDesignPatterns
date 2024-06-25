/**
 * @Author liming
 * @Date 2024/6/25 8:27
 **/

//单动作条件判断，每增加一个动作，就要增加一个条件判断
var lastAction = ''
function changeMarry(action){
    if(action === 'jump'){
        console.log('jump')
    }else if(action === 'shoot'){
        console.log('shoot')
    }else if(action === 'run'){
        console.log('run')
    }
    lastAction = action
}

//复合动作对条件判断的开销是翻倍的
var lastAction1 = ''
var lastAction2 = ''
function changeMarry2(action1, action2){
    if(action1 === 'shoot' && action2 === 'jump'){
        console.log('shoot+jump')
    }else if(action1 === 'shoot' && action2 === 'run'){
        console.log('shoot+run')
    }else if(action1 === 'jump' && action2 === 'run'){
        console.log('jump+run')
    }
    lastAction1 = action1 || ''
    lastAction2 = action2 || ''
}