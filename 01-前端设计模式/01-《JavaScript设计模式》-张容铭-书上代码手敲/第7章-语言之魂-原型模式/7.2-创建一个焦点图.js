/**
 * @Author liming
 * @Date 2024/6/5 12:13
 **/
//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr; //轮播图片数组
    this.container = container; //轮播图片容器
    this.createImage = function () {
        console.log('创建轮播图片');
    };
    this.changeImage = function () {
        console.log('切换下一张图片');
    };
}

//上下滑动切换类
var SlideLoopImg = function (imgArr, container) {
    //继承图片轮播类
    LoopImages.call(this, imgArr, container);
    //重写继承的切换下一张图片方法
    this.changeImage = function () {
        console.log('垂直切换下一张图片');
    };
}

//渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
    this.changeImage = function () {
        console.log('渐隐切换下一张图片');
    };
}

//实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg(['1.jpg', '2.jpg', '3.jpg'], 'slide', ['left.jpg', 'right.jpg']);
fadeImg.changeImage(); //渐隐切换下一张图片