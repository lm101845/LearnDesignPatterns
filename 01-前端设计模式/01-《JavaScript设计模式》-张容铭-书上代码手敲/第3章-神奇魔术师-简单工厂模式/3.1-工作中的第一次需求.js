/**
 * @Author liming
 * @Date 2024/5/29 9:51
 **/

var loginAlert = function (text) {
    this.content = text;
}

loginAlert.prototype.show = function () {
    // 显示警示框
    console.log(this.content)
}

var userNameAlert = new loginAlert('用户名不能多于16个字')

userNameAlert.show()

var passwordAlert = new loginAlert('输入的密码不正确')

passwordAlert.show()

console.log('===================================')

var loginConfirm = function (text) {
    this.content = text;
}
loginConfirm.prototype.show = function () {
    // 显示确认框
    console.log(this.content)
}

var loginConfirm = new loginConfirm('您的用户名不存在，请重新输入')
loginConfirm.show()