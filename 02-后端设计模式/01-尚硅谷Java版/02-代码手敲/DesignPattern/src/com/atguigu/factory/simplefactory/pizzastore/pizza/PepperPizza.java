package com.atguigu.factory.simplefactory.pizzastore.pizza;

/**
 * @Author liming
 * @Date 2023/11/14 12:13
 * @Description
 **/
public class PepperPizza extends Pizza{
    @Override
    public void prepare() {
        System.out.println("给制作胡椒披萨准备原材料");
    }
}
