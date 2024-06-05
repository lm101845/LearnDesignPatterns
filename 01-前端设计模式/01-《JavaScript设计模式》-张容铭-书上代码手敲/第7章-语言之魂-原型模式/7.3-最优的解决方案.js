/**
 * @Author liming
 * @Date 2024/6/5 12:18
 **/
//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr; // 轮播图片数组
    this.container = container; // 轮播图片容器
}

LoopImages.prototype = {
    // 创建轮播图片
    createImage: function () {
        console.log('LoopImages createImage function');
    },
    // 切换下一张图片
    changeImage: function () {
        console.log('LoopImages changeImage function');
    }
}

// 上下滑动切换类
var SlideLoopImg = function (imgArr, container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
}


SlideLoopImg.prototype = new LoopImages();

// 重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function () {
    console.log('SlideLoopImg changeImage function');
}

// 渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow; // 切换箭头私有变量
}

FadeLoopImg.prototype = new LoopImages();

FadeLoopImg.prototype.changeImage = function () {
    console.log('FadeLoopImg changeImage function');
}

// 测试用例
var fadeImg = new FadeLoopImg(['1.jpg', '2.jpg', '3.jpg'], 'slide', ['left.jpg', 'right.jpg']);
fadeImg.changeImage(); // 输出：FadeLoopImg changeImage function
console.log(fadeImg.container); // 输出：slide