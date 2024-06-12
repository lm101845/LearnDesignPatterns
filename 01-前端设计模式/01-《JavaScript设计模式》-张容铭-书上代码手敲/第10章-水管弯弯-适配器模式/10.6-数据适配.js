/**
 * @Author liming
 * @Date 2024/6/12 11:56
 **/

var arr = ['JS', 'book', '前端编程', '8月1日']
var obj = {
    name: '',
    type: '',
    title:'',
    time:''
}

function arrToObjAdapter(arr) {
    return {
        name: arr[0],
        type: arr[1],
        title: arr[2],
        time: arr[3]
    }
}

var adapter = arrToObjAdapter(arr)
console.log(adapter)