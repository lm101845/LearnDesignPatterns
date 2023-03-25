package com.atguigu.principle.singleresponsibility;

/**
 * @Author liming
 * @Date 2022/12/22 14:21
 **/
public class SingleResponsibility3 {
    public static void main(String[] args) {
        Vehicle3 vehicle3 = new Vehicle3();
        vehicle3.run("汽车");
        vehicle3.runAir("飞机");
        vehicle3.runWater("轮船");
    }
}

//方式3的分析：
//1.这种修改方法没有对原来的类做大的修改，只是增加了方法
//2.这里虽然没有在类这个级别上遵守单一职责原则，但是在方法级别上，仍然是遵守单一职责
class Vehicle3{
    public void run(String vehicle){
        System.out.println(vehicle + "在公路上运行");
    }

    public void runAir(String vehicle){
        System.out.println(vehicle + "在天空中运行");
    }

    public void runWater(String vehicle){
        System.out.println(vehicle + "在水中运行");
    }
}


