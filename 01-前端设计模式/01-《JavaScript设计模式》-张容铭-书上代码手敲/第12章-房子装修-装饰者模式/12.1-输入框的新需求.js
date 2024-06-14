/**
 * @Author liming
 * @Date 2024/6/14 12:02
 **/

//输入框元素
var telInput = document.getElementById('tel_input')

//输入格式提示文案
var telWarnText = document.getElementById('tel_warn_text')

//点击输入框时，显示输入格式提示文案
input.onclick = function () {
    telWarnText.style.display = 'block'
}

//于是小白就写了下面的代码
//输入框元素
var telInput = document.getElementById('tel_input')
var telWarnText = document.getElementById('tel_warn_text')
var telDemoText = document.getElementById('tel_demo_text')

input.onclick = function () {
    telWarnText.style.display = 'block'
    telDemoText.style.display = 'none'
}