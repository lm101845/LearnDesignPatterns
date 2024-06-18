/**
 * @Author liming
 * @Date 2024/6/18 8:16
 **/
var spans = document.querySelectorAll('span');

//为用户名绑定特效
spans[0].onmouseover = function () {
    this.style.color = 'red';
    this.style.cursor = 'pointer';
}

spans[0].onmouseout = function () {
    this.style.color = 'black';
    this.style.background = 'white';
}

//为等级绑定特效
//...